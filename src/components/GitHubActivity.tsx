import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowUpRight, GitHubIcon } from './icons';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

type State =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; repos: Repo[]; total: number };

const CACHE_KEY = 'gh-repos-v1';
const CACHE_MS = 10 * 60 * 1000;
const fmt = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

async function loadRepos(user: string, signal: AbortSignal): Promise<Repo[]> {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? 'null');
    if (cached && Date.now() - cached.t < CACHE_MS) return cached.data as Repo[];
  } catch { /* storage unavailable: just fetch */ }

  const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
  const data = (await res.json()) as Repo[];
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data })); } catch { /* ignore */ }
  return data;
}

export function GitHubActivity() {
  const [state, setState] = useState<State>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  const { user, url, hide } = profile.github;

  useEffect(() => {
    const ctrl = new AbortController();
    setState({ status: 'loading' });
    loadRepos(user, ctrl.signal)
      .then((all) => {
        const shown = all
          .filter((r) => !r.fork && r.name.toLowerCase() !== user.toLowerCase() && !hide.includes(r.name))
          .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
          .slice(0, 6);
        setState({ status: 'ready', repos: shown, total: all.length });
      })
      .catch((err) => { if (err.name !== 'AbortError') setState({ status: 'error' }); });
    return () => ctrl.abort();
  }, [user, hide, attempt]);

  return (
    <Section
      id="github"
      title="Code on GitHub"
      tone="deep"
      lede="Everything on this page is public. The list below loads live from my GitHub account, most recently updated first."
    >
      <Reveal>
        <div aria-live="polite">
          {state.status === 'loading' && (
            <ul className="border-t border-line" aria-label="Loading repositories">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex animate-pulse flex-col gap-2 border-b border-line py-5 motion-reduce:animate-none">
                  <span className="h-4 w-48 rounded bg-panel-2" />
                  <span className="h-3 w-full max-w-md rounded bg-panel" />
                </li>
              ))}
            </ul>
          )}

          {state.status === 'error' && (
            <div className="rounded-lg border border-line bg-panel/60 p-6">
              <p className="font-medium">Repositories could not be loaded right now.</p>
              <p className="mt-1 text-sm text-muted">GitHub may be rate-limiting this network. You can retry or open the profile directly.</p>
              <button type="button" onClick={() => setAttempt((n) => n + 1)} className="mt-4 rounded-md border border-line px-4 py-2 text-sm hover:border-sky/60">
                Try again
              </button>
            </div>
          )}

          {state.status === 'ready' && (
            <>
              <ul className="border-t border-line">
                {state.repos.map((r) => (
                  <li key={r.id} className="grid gap-1 border-b border-line py-5 md:grid-cols-12 md:gap-6">
                    <div className="md:col-span-4">
                      <a href={r.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium underline decoration-line underline-offset-4 hover:decoration-gold">
                        {r.name} <ArrowUpRight width={15} height={15} />
                      </a>
                    </div>
                    <p className="text-sm leading-relaxed text-muted md:col-span-6">{r.description ?? ''}</p>
                    <p className="text-sm text-muted md:col-span-2 md:text-right">
                      {r.language && <span className="mr-3 text-fg/80">{r.language}</span>}
                      {fmt.format(new Date(r.pushed_at))}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">Showing {state.repos.length} of {state.total} public repositories.</p>
            </>
          )}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-medium text-paper-fg transition-colors hover:bg-[#ffd92e]"
        >
          <GitHubIcon /> Explore my work on GitHub →
        </a>
      </Reveal>
    </Section>
  );
}
