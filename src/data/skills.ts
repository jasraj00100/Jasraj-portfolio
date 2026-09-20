// `evidence` lists the project ids (see projects.ts) where the skill is actually used.
// A skill with no evidence is still shown, just without a "Used in" line.

export type Skill = { name: string; evidence?: string[] | 'all'; highlight?: boolean };

export const analyticsSkills: Skill[] = [
  { name: 'Python', evidence: ['inventory'] },
  { name: 'Pandas', evidence: ['inventory'] },
  { name: 'NumPy' },
  { name: 'Matplotlib' },
  { name: 'Seaborn' },
  { name: 'MySQL' },
  { name: 'Excel' },
  { name: 'Power BI', evidence: ['ola'], highlight: true },
];

export const programmingSkills: Skill[] = [
  { name: 'C++', evidence: ['student-records', 'text-analyzer'] },
  { name: 'Data structures and algorithms' },
  { name: 'Object-oriented programming' },
  { name: 'File handling' },
];

export const toolSkills: Skill[] = [
  { name: 'Git', evidence: 'all' },
  { name: 'GitHub', evidence: 'all' },
  { name: 'VS Code' },
];

export const learningSkills = ['Machine learning', 'Competitive programming'];
