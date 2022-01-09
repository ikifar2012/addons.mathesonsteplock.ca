// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Matheson's HA Addons",
  tagline: 'Click the button below to install',
  url: 'https://addons.mathesonsteplock.ca',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ikifar2012', // Usually your GitHub org/user name.
  projectName: 'addons.mathesonsteplock.ca', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ikifar2012/addons.mathesonsteplock.ca',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ikifar2012/addons.mathesonsteplock.ca',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Matheson's HA Addons",
        logo: {
          alt: "Matheson's HA Addon's Logo",
          src: 'img/logo.ping',
        },
        items: [
          {
            type: 'doc',
            docId: 'installation',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://mathesonsteplock.ca',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Remote Backup',
                to: '/docs/addons/remote-backup/basic-config'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'DrZzs Discord',
                href: 'https://discord.me/drzzs',
              },
              {
                label: 'What are we fixing today, Discord',
                href: 'https://discord.gg/Uhmhu3B',
              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ikifar2012',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MathesonStep',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matheson Steplock. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
