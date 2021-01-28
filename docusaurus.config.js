module.exports = {
  title: 'USC Makers Docs',
  tagline: 'Helping you build your next project!',
  url: 'https://viterbimakers.usc.edu/',
  baseUrl: '/uscmakers-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'uscmakers', // Usually your GitHub org/user name.
  projectName: 'uscmakers-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'USC Makers Docs',
      logo: {
        alt: 'USC Makers Logo',
        src: 'img/makers_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
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
              to: 'docs/installation/',
            },
            {
              label: 'Adafruit Clue',
              to: 'docs/clue/',
            },
            {
              label: 'Components',
              to: 'docs/components/',
            },
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/uscmakers/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/usc-makers/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/uscmakers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} USC Makers`,
    },
    prism: {
      additionalLanguages: ['arduino'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/uscmakers/uscmakers-docs/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
