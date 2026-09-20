import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:px-8">
        <p>© {new Date().getFullYear()} {profile.fullName || profile.name}</p>
        <p>Built with React, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
