import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { CloseIcon, MenuIcon } from './icons';
import { profile } from '../data/profile';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'powerbi', label: 'Power BI' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const;

// Sections without their own nav item highlight the nav item they belong under.
const parentOf: Record<string, string> = { workflow: 'skills', github: 'projects', learning: 'achievements' };
const watchedIds = [...navLinks.map((l) => l.id), ...Object.keys(parentOf)];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const current = useActiveSection(watchedIds);
  const active = parentOf[current] ?? current;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? 'border-line/70 bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-20 rounded bg-gold px-3 py-2 text-sm font-medium text-paper-fg focus:translate-y-0"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                <span className={active === l.id ? 'border-b-2 border-gold pb-1' : 'border-b-2 border-transparent pb-1'}>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="fade-in border-t border-line/70 px-5 pb-4 pt-2 md:hidden">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`flex items-center justify-between border-b border-line/50 py-3.5 text-base ${
                    active === l.id ? 'text-fg' : 'text-muted'
                  }`}
                >
                  {l.label}
                  {active === l.id && <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
