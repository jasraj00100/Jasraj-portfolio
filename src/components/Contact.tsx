import { profile } from '../data/profile';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './icons';

const btn = 'inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors';

export function Contact() {
  const { email, github, location, resumeUrl } = profile;
  return (
    <Section
      id="contact"
      title="Contact"
      lede="I am looking for data analyst and data-focused software internships. If you are hiring, or want to talk about one of the projects, get in touch."
    >
      <Reveal>
        <div className="flex flex-wrap gap-3">
          {email ? (
            <a href={`mailto:${email}`} className={`${btn} bg-gold text-paper-fg hover:bg-[#ffd92e]`}>
              <MailIcon /> Email me
            </a>
          ) : (
            <a href={github.url} target="_blank" rel="noreferrer" className={`${btn} bg-gold text-paper-fg hover:bg-[#ffd92e]`}>
              <GitHubIcon /> Find me on GitHub
            </a>
          )}
          {email && (
            <a href={github.url} target="_blank" rel="noreferrer" className={`${btn} border border-line bg-panel/60 hover:border-sky/60`}>
              <GitHubIcon /> GitHub
            </a>
          )}
          <a href={resumeUrl} className={`${btn} border border-line bg-panel/60 hover:border-sky/60`}>
            <DownloadIcon /> Resume
          </a>
        </div>

        <dl className="mt-12 grid max-w-3xl gap-x-10 border-t border-line sm:grid-cols-3">
          {email && (
            <div className="border-b border-line py-4 sm:border-b-0">
              <dt className="flex items-center gap-2 text-sm text-muted"><MailIcon width={15} height={15} /> Email</dt>
              <dd className="mt-1 break-all"><a className="underline decoration-line underline-offset-4 hover:decoration-gold" href={`mailto:${email}`}>{email}</a></dd>
            </div>
          )}
          <div className="border-b border-line py-4 sm:border-b-0">
            <dt className="flex items-center gap-2 text-sm text-muted"><GitHubIcon width={15} height={15} /> GitHub</dt>
            <dd className="mt-1"><a className="underline decoration-line underline-offset-4 hover:decoration-gold" href={github.url} target="_blank" rel="noreferrer">github.com/{github.user}</a></dd>
          </div>

          <div className="border-b border-line py-4 sm:border-b-0">
            <dt className="flex items-center gap-2 text-sm text-muted"><LinkedInIcon width={15} height={15} /> LinkedIn</dt>
            <dd className="mt-1"><a className="underline decoration-line underline-offset-4 hover:decoration-gold" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/jasraj-6b284627b</a></dd>
          </div>

          <div className="py-4">
            <dt className="flex items-center gap-2 text-sm text-muted"><PinIcon width={15} height={15} /> Location</dt>
            <dd className="mt-1">{location}</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}