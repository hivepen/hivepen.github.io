export const site = {
  name: "Hivepen",
  title: "Hivepen | Development Studio for Hive Integrations and Digital Products",
  description:
    "Hivepen is a development studio building software, integrations, and digital experiences connected to Hive and beyond. We help communities, projects, initiatives, and individuals adopt blockchain with confidence.",
  url: "https://hivepen.com",
  image: "/img/logo/hivepen-logo-nobg.svg",
  author: "carlosepc",
  links: {
    founder: "https://carlosepc.github.io",
    hivepenHive: "https://ecency.com/@hiveto",
    founderProfile: "/p/?u=carlosepc",
    hiveProfile: "/p/?u=hivepen"
  },
  keywords: [
    "Hivepen",
    "Hive blockchain",
    "Hive development",
    "blockchain studio",
    "crypto onboarding",
    "Hive integrations",
    "wallet onboarding",
    "web3 development",
    "digital products"
  ],
  knowsAbout: [
    "Hive blockchain",
    "software development",
    "product design",
    "digital onboarding",
    "wallet UX",
    "blockchain integrations"
  ]
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
