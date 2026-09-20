import { achievements, education, learning } from '../data/record';
import { Section } from './Section';
import { Reveal } from './Reveal';

export function Achievements() {
  return (
    <Section id="achievements" title="Education and achievements">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h3 className="text-lg font-semibold tracking-tight">Education</h3>
          <div className="mt-3 border-t border-line pt-5">
            <p className="text-lg font-medium leading-snug">{education.school}</p>
            <p className="mt-1 text-fg/90">{education.degree}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 text-sm text-muted">
              <span>{education.years}</span>
              <span>{education.status}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="text-lg font-semibold tracking-tight">Achievements</h3>
          <ul className="mt-3 border-t border-line">
            {achievements.map((a) => (
              <li key={a.title} className="flex gap-5 border-b border-line py-5">
                <span className="w-24 shrink-0 font-display text-xl font-semibold leading-snug text-gold">{a.place}</span>
                <span>
                  <span className="block leading-snug">{a.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{a.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Learning() {
  return (
    <Section id="learning" title="Currently learning" tone="deep" lede="Where my practice hours are going right now.">
      <Reveal>
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {learning.map((l) => (
            <li key={l.title} className="border-t border-sky/50 pt-4">
              <h3 className="font-semibold tracking-tight">{l.title}</h3>
              <p className="mt-1 text-sm text-muted">{l.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
