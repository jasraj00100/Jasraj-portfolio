// Runs before every build. Warns (never fails) about content a recruiter would notice is missing.
import { existsSync, readFileSync } from 'node:fs';

const warn = (msg) => console.warn(`\x1b[33m[content check]\x1b[0m ${msg}`);
const profile = readFileSync('src/data/profile.ts', 'utf8');

if (!existsSync('public/resume.pdf')) warn('public/resume.pdf is missing. The Resume buttons will 404 until you add it.');
if (/email:\s*["']{2}/.test(profile)) warn('No email set in src/data/profile.ts. The Contact section will only show GitHub.');
