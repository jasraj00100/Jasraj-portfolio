import { useRef, useState, type KeyboardEvent } from 'react';
import { powerbi } from '../data/powerbi';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowUpRight, GitHubIcon } from './icons';

export function PowerBI() {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { screens } = powerbi;
  const current = screens[index];

  const select = (i: number) => {
    const next = (i + screens.length) % screens.length;
    setIndex(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); select(index + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); select(index - 1); }
    else if (e.key === 'Home') { e.preventDefault(); select(0); }
    else if (e.key === 'End') { e.preventDefault(); select(screens.length - 1); }
  };

  return (
    <Section id="powerbi" title={`Power BI: ${powerbi.title}`} tone="paper" lede={powerbi.lede}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="min-w-0 lg:col-span-7">
          <div role="tablist" aria-label="Dashboard pages" onKeyDown={onKeyDown} className="grid grid-cols-4 border-b border-paper-line sm:flex sm:gap-1 sm:overflow-x-auto">
            {screens.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={i === index}
                aria-controls="dashboard-panel"
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`-mb-px whitespace-nowrap border-b-2 px-1 py-3 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm ${
                  i === index ? 'border-paper-fg text-paper-fg' : 'border-transparent text-paper-muted hover:text-paper-fg'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div id="dashboard-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} className="mt-4">
            <div className="overflow-hidden rounded-lg border border-paper-line bg-white shadow-[0_18px_50px_-24px_rgba(17,26,46,0.35)]">
              <img
                key={current.id}
                src={current.image}
                alt={current.alt}
                width={1330}
                height={748}
                loading="lazy"
                className="fade-in block w-full"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <p className="max-w-[52ch] text-sm leading-relaxed text-paper-muted">{current.caption}</p>
              <a href={current.image} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 text-sm text-paper-fg underline decoration-paper-line underline-offset-4 hover:decoration-paper-fg">
                Full size <ArrowUpRight width={15} height={15} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="min-w-0 space-y-9 lg:col-span-5" delay={80}>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">What the dashboard covers</h3>
            <ul className="mt-3 border-t border-paper-line">
              {powerbi.covers.map((c) => (
                <li key={c} className="flex items-center gap-3 border-b border-paper-line py-2.5 text-[0.95rem]">
                  <span aria-hidden className="h-1 w-3 shrink-0 rounded-full bg-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight">Skills practised</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {powerbi.skills.map((s) => (
                <li key={s} className="rounded-full border border-paper-line bg-white px-3 py-1 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={powerbi.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-paper-fg px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e2c4a]"
            >
              <GitHubIcon width={16} height={16} /> View repository
            </a>
            <a href={powerbi.pbixUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm underline decoration-paper-line underline-offset-4 hover:decoration-paper-fg">
              Open the .pbix file <ArrowUpRight width={15} height={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
