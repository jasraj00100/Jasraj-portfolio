// Add a project by adding an object to this array. Nothing else needs to change.

export type Project = {
  id: string;
  name: string;
  shortName: string; // used in "Used in: ..." labels under skills
  kind: 'data' | 'software';
  featured?: boolean;
  summary: string;
  tech: string[];
  built: string[]; // what you actually built
  operations?: string[]; // shown as a row of operations on a featured card
  roadmap?: string[]; // planned improvements, only if the repo README lists them
  note?: string; // honest context shown on the card
  repoUrl: string;
  demoUrl?: string; // only set if a live demo really exists
};

const gh = 'https://github.com/jasraj00100';

export const projects: Project[] = [
  {
    id: 'inventory',
    name: 'Inventory Management System',
    shortName: 'Inventory system',
    kind: 'data',
    featured: true,
    summary:
      'A console-based inventory system built with Python and Pandas. It covers the whole product lifecycle: add stock, look it up, change it, sell it, and produce a bill.',
    tech: ['Python', 'Pandas'],
    built: [
      'CRUD operations for products (add, view, search, update, delete) through a menu-driven interface.',
      'A sales flow that reduces stock automatically whenever a product is sold.',
      'Bill generation that applies GST and discounts.',
    ],
    operations: ['Add', 'View', 'Search', 'Update', 'Delete', 'Sell', 'Bill with GST and discount'],
    roadmap: ['Store inventory in Excel', 'Load inventory automatically', 'Sales history', 'Low-stock alerts', 'Login system'],
    repoUrl: `${gh}/Inventory-Management-System-V-1.0`,
  },
  {
    id: 'ola',
    name: 'OLA Ride Analytics Dashboard',
    shortName: 'OLA dashboard',
    kind: 'data',
    featured: true,
    summary:
      'An interactive Power BI dashboard on OLA ride-booking data: bookings, revenue, cancellations, vehicle performance, payment methods and ratings.',
    tech: ['Power BI', 'DAX'],
    built: [
      'A five-page report linked by a navigation panel, with a date slicer.',
      'KPI cards and charts for bookings, cancellations and ratings.',
      'A vehicle-type comparison table across seven vehicle types.',
    ],
    note: 'My first Power BI project, built while following a guided tutorial to learn the fundamentals.',
    repoUrl: `${gh}/OLA-PowerBI-Dashboard`,
  },
  {
    id: 'student-records',
    name: 'Student Record Management System',
    shortName: 'Student records',
    kind: 'software',
    summary:
      'A console-based student record system written in C++.',
    tech: ['C++'],
    built: ['Add, search and update student records.', 'Ranking and pass/fail analysis.', 'Class performance tracking.'],
    repoUrl: `${gh}/Student-Record-Management-System`,
  },
  {
    id: 'text-analyzer',
    name: 'Text Analyzer V2',
    shortName: 'Text analyzer',
    kind: 'software',
    summary:
      'A C++ program that analyses the text you give it.',
    tech: ['C++'],
    built: ['Letter frequency and digit counts.', 'Word and space counts.', 'Special character detection on multi-line input.'],
    repoUrl: `${gh}/Text-Analyzer-V2`,
  },
  {
    id: 'game-suite',
    name: '3-in-1 Game Suite',
    shortName: 'Game suite',
    kind: 'software',
    summary: 'A terminal-based game hub written in C++: Brain Ops, Rock Paper Scissors and Toss.',
    tech: ['C++', 'STL'],
    built: ['Menu-driven selection between three games.', 'Randomised gameplay with score tracking.', 'Game logic, scoring and navigation kept in separate parts.'],
    repoUrl: `${gh}/3in1Game`,
  },
];

export const projectById = (id: string) => projects.find((p) => p.id === id);
