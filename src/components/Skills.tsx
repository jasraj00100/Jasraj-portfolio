import { analyticsSkills, programmingSkills, toolSkills, learningSkills, type Skill } from '../data/skills';
import { projectById } from '../data/projects';
import { profile } from '../data/profile';
import { Section } from './Section';
import { Reveal } from './Reveal';

function evidenceLabel(s: Skill): string | null {
  if (!profile.showSkillEvidence || !s.evidence) return null;
  if (s.evidence === 'all') return 'Used in: all projects';
  const names = s.evidence.map((id) => projectById(id)?.shortName).filter(Boolean);
  return names.length ? `Used in: ${names.join(', ')}` : null;
}

function Tile({ skill }: { skill: Skill }) {
  const proof = evidenceLabel(skill);
  return (
    <li
      className={`rounded-md border px-4 py-3 ${
        skill.highlight ? 'border-gold bg-gold/[0.12]' : 'border-line bg-panel/60'
      }`}
    >
      <span className={`block font-medium ${skill.highlight ? 'text-gold' : ''}`}>{skill.name}</span>
      {proof && <span className="mt-0.5 block text-xs leading-snug text-muted">{proof}</span>}
    </li>
  );
}

function PlainList({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <ul className="mt-3 border-t border-line">
        {skills.map((s) => {
          const proof = evidenceLabel(s);
          return (
            <li key={s.name} className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-line py-3">
              <span>{s.name}</span>
              {proof && <span className="text-xs text-muted">{proof}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lede="The tools I use to work with data, and the ones I use to build software around it."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="min-w-0 lg:col-span-7">
          <h3 className="text-xl font-semibold tracking-tight">Data analytics</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {analyticsSkills.map((s) => (
              <Tile key={s.name} skill={s} />
            ))}
          </ul>
          <div className="mt-10 border-t border-line pt-6">
            <h3 className="text-lg font-semibold tracking-tight">Currently learning</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {learningSkills.map((l) => (
                <li key={l} className="rounded-full border border-dashed border-sky/60 px-3 py-1 text-sm text-sky">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="min-w-0 space-y-10 lg:col-span-5" delay={80}>
          <PlainList title="Programming" skills={programmingSkills} />
          <PlainList title="Tools" skills={toolSkills} />
        </Reveal>
      </div>

    </Section>
  );
}
