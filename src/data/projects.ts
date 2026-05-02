export const projects = [
  {
    id: "genioo",
    tag: "Games",
    title: "Genioo",
    status: "Mobile-first",
    description: "Brain-stimulating games that reward focus, logic, and curiosity. Classic formats and new challenges — in a space that never interrupts, pressures, or manipulates.",
    pills: [
      { text: "No ads", dark: true },
      { text: "No pressure", dark: true },
      { text: "Brain games", dark: false },
      { text: "Fair design", dark: false }
    ],
    accentColor: "#e8a020"
  },
  {
    id: "gloti",
    tag: "Languages",
    title: "Gloti",
    status: "In development",
    description: "Learn languages the way your brain actually works — through stories. Discover vocabulary in real context, not isolated flashcards. Read, interpret, absorb.",
    pills: [
      { text: "Story-driven", dark: true },
      { text: "Real context", dark: true },
      { text: "Reading", dark: false },
      { text: "Vocabulary", dark: false }
    ],
    accentColor: "#c0462b"
  },
  {
    id: "studio",
    tag: "Hive · Pro tools",
    title: "Hivepen\nStudio",
    status: "Coming soon",
    description: "An advanced workspace for creators, communities, and curators on Hive. Powerful tools for the people who take the ecosystem seriously.",
    pills: [
      { text: "Hive blockchain", dark: true },
      { text: "Curation", dark: true },
      { text: "Communities", dark: false },
      { text: "Pro users", dark: false }
    ],
    accentColor: "#1a5c3a"
  }
] as const;
