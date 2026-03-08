import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // Center
  title: "Nikolai Aristov",
  tagline: "Lifestyle and Creativity",

  // Favicon shows up in Browser Tabs, not on actual page
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://nikolaiaristov.com",

  trailingSlash: false,

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // Top Left, 1st Item
        docs: {
          sidebarPath: "./sidebars.ts",
          // Adds "edit this page" links.
          editUrl: "https://github.com/KodiStudios/aristov/tree/main/",
        },

        // Top Left, 2nd Item
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/KodiStudios/aristov/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },

    // Large Screens: Top Bar
    // Small Screens: Top Left Menu Burger Button
    navbar: {
      title: "Nikolai Aristov",
      logo: {
        alt: "Nikolai Aristov Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Collections",
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
        },
        { label: "Blog", to: "/blog", position: "left" },
        {
          href: "https://github.com/KodiStudios/aristov",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    // Bottom
    footer: {
      style: "dark",
      links: [
        // Bottom Left
        {
          title: "Niko",
          items: [
            {
              label: "Collections",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },

        // Bottom Center
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/nikoaristov",
            },
          ],
        },

        // Bottom Right
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/KodiStudios/aristov",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nikolai Aristov. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
