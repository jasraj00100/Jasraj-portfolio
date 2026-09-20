# Jasraj: Data Analytics Portfolio

React + TypeScript + Tailwind CSS (v4), built with Vite. All content lives in `src/data/`, so updating the site means editing objects, not JSX.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check, content check, production build into dist/
```

`npm run build` prints a warning if `public/resume.pdf` or your email goes missing.

## Before you publish

Your resume (`public/resume.pdf`) and email are already set. One thing left: set `VITE_SITE_URL` in `.env` to your deployed URL (no trailing slash) so link previews get an absolute image URL. To update the resume later, replace `public/resume.pdf`.

## Where to edit

| To change...                     | Edit                                                       |
| -------------------------------- | ---------------------------------------------------------- |
| Name, intro, email, GitHub, about | `src/data/profile.ts`                                      |
| Add or edit a project            | `src/data/projects.ts` (add one object to the array)       |
| Skills and "Used in" evidence    | `src/data/skills.ts`                                       |
| Power BI pages / screenshots     | `src/data/powerbi.ts` + images in `src/assets/ola/`        |
| Education, achievements, learning, workflow steps | `src/data/record.ts`                      |

### Add a project
Add an object to `projects` in `src/data/projects.ts`. Set `kind: 'data'` for analytics work, `'software'` for the compact "More projects" list. Only set `demoUrl` when a live demo really exists.

### Add a Power BI page (for example Revenue)
1. Save the screenshot of that report page (just the report canvas, not your whole desktop) as `src/assets/ola/revenue.webp`.
2. In `src/data/powerbi.ts`, import it and add an entry to `screens`.

### "Used in" labels under skills
Each skill can list the project ids where you actually use it. Skills with no project behind them still show, just without the label. Set `showSkillEvidence: false` in `profile.ts` to hide the labels.

### Live GitHub list
`src/components/GitHubActivity.tsx` calls the public GitHub API from the visitor's browser and caches the result for 10 minutes. If GitHub rate-limits a visitor it shows an error message with a retry button. Hide repos with `github.hide` in `profile.ts`.

## Deploy

- **GitHub Pages:** push to `main` and enable Pages with source "GitHub Actions" (workflow included in `.github/workflows/deploy.yml`).
- **Vercel / Netlify:** import the repo. Build command `npm run build`, output directory `dist`.
