import type {Config} from '@docusaurus/types';
import type {Preset as ClassicPreset} from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'AI101: 面向中学生的人工智能通识课',
  tagline: '系统理解人工智能，开启未来科技之门',
  favicon: 'img/favicon.ico',

  url: 'https://huashanjian.github.io',
  // 项目页部署到 https://huashanjian.github.io/ai101-website/
  baseUrl: '/ai101-website/',
  organizationName: 'huashanjian',
  projectName: 'ai101-website',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
      },
      en: {
        label: 'English',
      },
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/huashanjian/ai101-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'AI101 课程动态',
          blogDescription: '课程更新、教学公告与项目进展',
          postsPerPage: 10,
          feedOptions: {
            type: 'all',
            title: 'AI101 课程动态',
            language: 'zh-CN',
          },
        },
        pages: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies ClassicPreset['options'],
    ],
  ],

  themeConfig: {
    image: 'img/ai101-social-card.png',
    metadata: [
      {name: 'keywords', content: 'AI101, 人工智能, 中学生, 教育, 公开课'},
      {name: 'description', content: 'AI101 通识课帮助中学生系统理解人工智能与前沿科技。'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'AI101 人工智能通识课'},
      {property: 'og:description', content: '探索人工智能基础、伦理与实践案例的开放课程平台。'},
      {property: 'og:image', content: 'img/ai101-social-card.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: 'AI101 通识课',
      logo: {
        alt: 'AI101 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'stage-1/lecture-1',
          position: 'left',
          label: '课程大纲',
        },
        {
          to: '/resources',
          position: 'left',
          label: '资源中心',
        },
        {
          to: '/blog',
          position: 'left',
          label: '课程动态',
        },
        {
          to: '/about',
          position: 'left',
          label: '关于我们',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/huashanjian/ai101-website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '课程大纲',
              to: '/docs/stage-1/lecture-1',
            },
            {
              label: '项目任务',
              to: '/docs/stage-1/project-1',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/huashanjian/ai101-website',
            },
            {
              label: '讨论区',
              href: 'https://github.com/huashanjian/ai101-website/discussions',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '课程动态',
              to: '/blog',
            },
            {
              label: '关于我们',
              to: '/about',
            },
          ],
        },
      ],
      copyright:
        'Copyright © ' +
        new Date().getFullYear() +
        ' AI101 Project. Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'ai101-course',
      contextualSearch: true,
    },
    giscus: {
      repo: 'huashanjian/ai101-website',
      repoId: 'R_kgDOP0FDYA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOP0FDYM4Cvvi2',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
    announcementBar: {
      id: 'beta-notice',
      content:
        '🚀 AI101 网站正在公测，欢迎通过 GitHub 提交建议或反馈。',
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },

  scripts: (
    process.env.NODE_ENV === 'production'
      ? [
          {
            src: 'https://plausible.io/js/script.js',
            defer: true,
            'data-domain': 'huashanjian.github.io',
          },
        ]
      : []
  ) as any,
};

export default config;
