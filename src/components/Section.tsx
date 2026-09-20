import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  id: string;
  title: string;
  lede?: ReactNode;
  tone?: 'base' | 'deep' | 'paper';
  children: ReactNode;
};

const tones = {
  base: 'bg-bg text-fg',
  deep: 'bg-bg-deep text-fg',
  paper: 'on-paper bg-paper text-paper-fg',
};

export function Section({ id, title, lede, tone = 'base', children }: Props) {
  const paper = tone === 'paper';
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={tones[tone]}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {lede && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${paper ? 'text-paper-muted' : 'text-muted'}`}>{lede}</p>}
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
