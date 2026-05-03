// src/data/projects.ts

export interface Project {
  id: string;
  tag: string;
  title: string;
  status: string;
  description: string;
  pills: Array<{ text: string; dark: boolean }>;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'genioo',
    tag: 'Games',
    title: 'Genioo',
    status: 'In development',
    accentColor: '#c47b1e',
    description:
      'Brain-stimulating games that reward focus, logic, and curiosity. Classic formats and new challenges in a space that never interrupts, pressures, or manipulates.',
    pills: [
      { text: 'No ads',            dark: true  },
      { text: 'Brain games',       dark: true  },
      { text: 'Mobile-first',      dark: false },
    ],
  },
  {
    id: 'gloti',
    tag: 'Languages',
    title: 'Gloti',
    status: 'Coming soon',
    accentColor: '#b03e27',
    description:
      'Learn languages the way your brain actually works — through stories. Discover vocabulary in real context, not isolated flashcards. Read, interpret, absorb.',
    pills: [
      { text: 'Story-driven',   dark: true  },
      { text: 'Real context',   dark: true  },
      { text: 'Reading',        dark: false },
    ],
  },
  {
    id: 'studio',
    tag: 'Hive · Pro tools',
    title: 'Hivepen\nStudio',
    status: 'In development',
    accentColor: '#1e5c3a',
    description:
      'An advanced workspace for creators, communities, and curators on Hive. Powerful tools for the people who take the ecosystem seriously.',
    pills: [
      { text: 'Hive blockchain', dark: true  },
      { text: 'Curation tools',  dark: true  },
      { text: 'Communities',     dark: false },
    ],
  },
];
