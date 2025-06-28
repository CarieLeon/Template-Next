import { FooterNavigation, NavigationSection, NavigationItem } from "@/types/navigation";

export const mainNavigation: NavigationSection[] = [
  {
    title: "Documentation",
    items: [
      {
        name: "Guide de démarrage",
        href: "/docs/getting-started",
      },
      {
        name: "Architecture",
        href: "/docs/architecture",
      },
      {
        name: "Composants",
        href: "/docs/components",
      },
    ],
  },
  {
    title: "Ressources",
    items: [
      {
        name: "Templates",
        href: "/templates",
      },
      {
        name: "Boîte à outils",
        href: "/toolkit",
      },
    ],
  },
];

export const footerNavigation: FooterNavigation = {
  main: [
    { name: "Guide de démarrage", href: "/docs/getting-started" },
    { name: "Architecture", href: "/docs/architecture" },
    { name: "Composants", href: "/docs/components" },
    { name: "Templates", href: "/templates" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/next-generation-dev",
    },
    {
      name: "GitLab",
      href: "https://gitlab.next-generation.dev",
    },
    {
      name: "Slack",
      href: "https://next-generation.slack.com",
    },
  ],
  resources: [
    { name: "Documentation API", href: "/api-docs" },
    { name: "Guide de style", href: "/style-guide" },
    { name: "Changelog", href: "/changelog" },
    { name: "Wiki interne", href: "/wiki" },
  ],
};

export const navigation: NavigationItem[] = [
  { name: "Fonctionnalités", href: "#features" },
  { name: "Démo", href: "#demo" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];
