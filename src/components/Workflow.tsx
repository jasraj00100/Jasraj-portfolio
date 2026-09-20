import { workflow } from '../data/record';
import { Section } from './Section';
import { Reveal } from './Reveal';

export function Workflow() {
  return (
    <Section
      id="workflow"
      title="How I work with data"
      tone="deep"
      lede="Most of my projects follow the same path, from a raw source to something a person can read and act on."
    >
      <Reveal>
        <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
          {workflow.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 lg:block">
              {i < workflow.length - 1 && (
                <>
                  <span aria-hidden className="absolute left-[19px] top-12 h-[calc(100%-1.5rem)] w-px bg-line lg:hidden">
                    <span className="flow-line-y block h-full w-full bg-gold/70" style={{ transitionDelay: `${i * 220}ms` }} />
                  </span>
                  <span aria-hidden className="absolute left-12 top-5 hidden h-px w-[calc(100%-2rem)] bg-line lg:block">
                    <span className="flow-line block h-full w-full bg-gold/70" style={{ transitionDelay: `${i * 220}ms` }} />
                  </span>
                </>
              )}
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/70 bg-bg-deep font-display text-base font-semibold text-gold">
                {i + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${step.title} tools`}>
                  {step.tools.map((t) => (
                    <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-fg/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
