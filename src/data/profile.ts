//** Personal details used across the site. Edit here, not in components.**

export const profile = {
  name: 'Jasraj',
  fullName: '', //** optional. Your resume uses just "Jasraj", so this stays empty.**
  headline: 'Data analytics & Python',
  role: 'CSE undergraduate at IIIT Ranchi',
  intro:
    'Second-year B.Tech student. I clean, analyse and visualise data with Python, Pandas, SQL and Power BI, and I am looking for data analyst and data-focused software internships.',
  heroTools: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel'],

  email: 'sjrjasraj9470@gmail.com',
  location: 'Ranchi, Jharkhand, India',
  //** Resume PDF lives at public/resume.pdf (replace the file to update it)**
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,

  github: {
    user: 'jasraj00100',
    url: '[https://github.com/jasraj00100](https://github.com/jasraj00100)',
    //** Repository names to keep out of the live GitHub list.**
    hide: [] as string[],
  },

  linkedin: 'https://www.linkedin.com/in/jasraj00100',

  //** Shows "Used in: <project>" under skills that are backed by a project on this site.**
  showSkillEvidence: true,
};

export const about = {
  paragraphs: [
    'I am a second-year B.Tech student in Computer Science and Engineering at IIIT Ranchi. I work mainly in Python and C++, and I am moving deeper into data analytics: cleaning data, answering questions with it, and presenting the answer clearly.',
    'My projects so far are a Pandas-based inventory system, two C++ tools for student records and text analysis, and a Power BI dashboard on ride-booking data. Next I am building SQL and Power BI depth, while studying machine learning and practising competitive programming.',
  ],
  facts: [
    { label: 'Studying', value: 'B.Tech, Computer Science and Engineering, IIIT Ranchi (2025–2029)' },
    { label: 'Focus', value: 'Data analytics with Python, Pandas, SQL and Power BI' },
    { label: 'Also', value: 'C++, data structures and algorithms, competitive programming' },
    { label: 'Looking for', value: 'Data analyst, business analytics and data-focused software internships' },
  ],
};