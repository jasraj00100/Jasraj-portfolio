import { projects, type Project } from '../data/projects';
import { powerbi } from '../data/powerbi';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowUpRight, GitHubIcon } from './icons';

const chip = 'rounded border border-line px-2 py-0.5 text-xs text-fg/85';

function RepoLink({ url, label = 'View on GitHub' }: { url: string; label?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-line bg-panel/60 px-4 py-2.5 text-sm font-medium transition-colors hover:border-sky/60 hover:bg-panel"
    >
      <GitHubIcon width={16} height={16} /> {label}
    </a>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg/90">
          <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-gold" />
          {b}
        </li>
      ))}
    </ul>
  );
}

/** The lead project: gets the most space and the full breakdown. */
function LeadProject({ p }: { p: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-panel/70">
      <div className="border-l-4 border-gold p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gold">Featured project, {p.tech.join(' and ')}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-muted">{p.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {p.tech.map((t) => (
                <li key={t} className={chip}>{t}</li>
              ))}
            </ul>

            {p.operations && (
              <div className="mt-8">
                <h4 className="text-sm font-medium text-fg">What the program does</h4>
                <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
                  {p.operations.map((op, i) => (
                    <li key={op} className="flex items-center gap-2">
                      <span className="rounded-md bg-panel-2 px-3 py-1.5 text-sm">{op}</span>
                      {i < p.operations!.length - 1 && <span aria-hidden className="text-line">›</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <RepoLink url={p.repoUrl} />
              {p.demoUrl && (
                <a href={p.demoUrl} target="_blank" rel="noreferrer" className="ml-3 inline-flex items-center gap-1 text-sm underline underline-offset-4">
                  Live demo <ArrowUpRight width={15} height={15} />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <div>
              <h4 className="mb-3 text-sm font-medium text-fg">What I built</h4>
              <Bullets items={p.built} />
            </div>
            {p.roadmap && (
              <div>
                <h4 className="mb-3 text-sm font-medium text-fg">Planned next</h4>
                <ul className="flex flex-wrap gap-2">
                  {p.roadmap.map((r) => (
                    <li key={r} className="rounded-full border border-dashed border-line px-3 py-1 text-sm text-muted">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function DashboardProject({ p }: { p: Project }) {
  const shot = powerbi.screens[0];
  return (
    <article className="group grid overflow-hidden rounded-xl border border-line bg-panel/70 lg:grid-cols-12">
      <a href="#powerbi" className="flex items-center bg-bg-deep p-4 sm:p-6 lg:col-span-5" aria-label="See the OLA dashboard pages">
        <img
          src={shot.image}
          alt={shot.alt}
          width={1327}
          height={747}
          loading="lazy"
          className="block w-full rounded-md border border-line transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </a>
      <div className="p-6 sm:p-8 lg:col-span-7">
        <p className="text-sm font-medium text-gold">{p.tech.join(' and ')}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{p.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-4"><Bullets items={p.built} /></div>
        {p.note && <p className="mt-3 rounded-md bg-panel-2 px-3 py-2 text-sm text-fg/90">{p.note}</p>}
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className={chip}>{t}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#powerbi" className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-medium text-paper-fg hover:bg-[#ffd92e]">
            See the dashboard
          </a>
          <RepoLink url={p.repoUrl} label="Repository" />
        </div>
      </div>
    </article>
  );
}

function CompactProject({ p }: { p: Project }) {
  return (
    <li className="grid gap-4 border-b border-line py-7 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h4 className="text-lg font-semibold tracking-tight">{p.name}</h4>
        <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className={chip}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-6">
        <p className="leading-relaxed text-muted">{p.summary}</p>
        <div className="mt-3"><Bullets items={p.built} /></div>
      </div>
      <div className="md:col-span-2 md:text-right">
        <a href={p.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline decoration-line underline-offset-4 hover:decoration-gold">
          GitHub <ArrowUpRight width={15} height={15} />
        </a>
      </div>
    </li>
  );
}

export function Projects() {
  const lead = projects.find((p) => p.featured) ?? projects[0];
  const dashboards = projects.filter((p) => p.kind === 'data' && p.id !== lead.id);
  const software = projects.filter((p) => p.kind === 'software');

  return (
    <Section
      id="projects"
      title="Projects"
      lede="Selected work, ordered by relevance to data analytics. Every project links to its repository."
    >
      <div className="space-y-6">
        <Reveal>
          <LeadProject p={lead} />
        </Reveal>
        {dashboards.map((p) => (
          <Reveal key={p.id}>
            <DashboardProject p={p} />
          </Reveal>
        ))}
      </div>

      {software.length > 0 && (
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight">More C++ projects</h3>
          <ul className="mt-4 border-t border-line">
            {software.map((p) => (
              <CompactProject key={p.id} p={p} />
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}
