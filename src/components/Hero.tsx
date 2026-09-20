import { profile } from '../data/profile';
import { powerbi } from '../data/powerbi';
import { ArrowUpRight, DownloadIcon, GitHubIcon } from './icons';

function DataBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      <div className="data-grid absolute inset-0" />
      <svg className="lines-mask absolute inset-0 h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f2c811" stopOpacity="0.14" />
            <stop offset="1" stopColor="#f2c811" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 560 C120 540 200 470 320 480 S 500 400 620 420 S 820 330 940 280 S 1110 220 1200 170 V700 H0Z" fill="url(#area)" opacity="0.9" />
        <path className="draw" pathLength={1} d="M0 560 C120 540 200 470 320 480 S 500 400 620 420 S 820 330 940 280 S 1110 220 1200 170" stroke="#f2c811" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
        <path className="draw" pathLength={1} style={{ animationDelay: '0.9s' }} d="M0 630 C160 610 260 570 400 555 S 640 520 760 530 S 980 470 1200 450" stroke="#7db2ff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors';

export function Hero() {
  const first = powerbi.screens[0];
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <DataBackdrop />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <h1 id="hero-title" className="rise" style={{ ['--d' as string]: '0s' }}>
            <span className="block text-[clamp(3.5rem,11vw,6.25rem)] font-bold leading-[0.92] tracking-tight">{profile.name}</span>
            <span className="mt-4 block text-xl font-medium leading-snug text-fg/90 sm:text-2xl">
              {profile.role}.
              <span className="block text-sky">{profile.headline}.</span>
            </span>
          </h1>

          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ ['--d' as string]: '0.12s' }}>
            {profile.intro}
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ ['--d' as string]: '0.22s' }}>
            <a href={profile.resumeUrl} className={`${btnBase} bg-gold text-paper-fg hover:bg-[#ffd92e]`}>
              <DownloadIcon /> Resume
            </a>
            <a href={profile.github.url} target="_blank" rel="noreferrer" className={`${btnBase} border border-line bg-panel/60 hover:border-sky/60 hover:bg-panel`}>
              <GitHubIcon /> GitHub
            </a>
            <a href="#contact" className={`${btnBase} px-3 text-muted underline decoration-line underline-offset-4 hover:text-fg hover:decoration-gold`}>
              Contact
            </a>
          </div>

          <ul className="rise mt-8 flex flex-wrap gap-2" style={{ ['--d' as string]: '0.32s' }} aria-label="Core tools">
            {profile.heroTools.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <figure className="rise lg:col-span-6" style={{ ['--d' as string]: '0.3s' }}>
          <div className="rounded-xl border border-line bg-panel/50 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm sm:p-3">
            <img
              src={first.image}
              alt={first.alt}
              width={1327}
              height={747}
              fetchPriority="high"
              className="block w-full rounded-md"
            />
          </div>
          <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-muted">
            <span>{powerbi.title}, built in Power BI.</span>
            <a href="#powerbi" className="inline-flex items-center gap-1 text-fg underline decoration-line underline-offset-4 hover:decoration-gold">
              See all pages <ArrowUpRight width={15} height={15} />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
