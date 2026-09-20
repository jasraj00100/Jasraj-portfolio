import { about } from '../data/profile';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="About" tone="deep">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p} className="max-w-[62ch] text-base leading-relaxed text-fg/90 sm:text-lg">
              {p}
            </p>
          ))}
        </div>
        <dl className="lg:col-span-5">
          {about.facts.map((f) => (
            <div key={f.label} className="border-t border-line py-4 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-4">
              <dt className="text-sm font-medium text-gold">{f.label}</dt>
              <dd className="mt-1 text-fg/90">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
