import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/doc-vite/",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "pzm9012 的文稿",
      description: "pzm9012 的文稿",
      themeConfig: {
        nav: [
          { text: '我的语雀主页', link: 'https://yuque.com/pzm9012/ct5ume/' },
          { text: '博客', link: 'https://pzm9012.github.io' },
          { text: '我的 deepin 论坛主页', link: 'https://bbs.deepin.org/user/217969' }
        ],
        sidebar: {
          '/': [
            {
              text: '文稿',
              items: [
                { text: '首页', link: '/home' },
                {
                  text: 'deepin 常用资源整理',
                  items: [
                    { text: '整理主体', link: '/deepin-src-col/main' },
                    { text: '归档', link:'deepin-src-col/achieve'},
                    { text: '项目相关', link: '/deepin-src-col/about' }
                  ]
                },
                { text: 'deepin 常见问题解决方案整理',
                  items: [
                    { text: '高频问题', link: '/deepin-solutions/frequently-asked' },
                    { text: '常见问题', link: '/deepin-solutions/common' },
                    { text: '解决方案收集', link: '/deepin-solutions/collect' },
                    { text: '致谢', link: '/deepin-solutions/thanks' }
                  ]
                }
              ]
            }
          ]
        },
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/pzm9012/doc-vite/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '在此页上',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "Pzm9012's Site",
      description: "A project to collect documents",
      themeConfig: {
        sidebar: [
          { text: 'Instructions', link: '/en/instructions' },
          {
            text: 'Deepin Common Q&A',
            items: [
              { text: 'Frequently Asked', link: '/en/deepin-solutions/frequently-asked' },
              { text: 'Common Problems', link: '/en/deepin-solutions/common' },
              { text: 'Collections', link: '/en/deepin-solutions/collect' },
              { text: 'Thanks', link: '/en/deepin-solutions/thanks' }
            ]
          }
        ],
        sidebarMenuLabel: 'Contents'
      },

    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/site-logo.png',
    outline: [2, 6], 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pzm9012' }
    ],
    search: {
      provider: 'local'
    }
  }
})
