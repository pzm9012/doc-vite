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
                    { text: '说明', link: '/deepin-src-col/sec-0' },
                    { text: '致谢', link: '/deepin-src-col/thanks' },
                    { text: '一、综合', link: '/deepin-src-col/sec-1' },
                    { text: '二、系统', link: '/deepin-src-col/sec-2' },
                    { text: '三、硬件和设备', link: '/deepin-src-col/sec-3' },
                    { text: '四、应用软件', link: '/deepin-src-col/sec-4' },
                    { text: '五、社区与论坛', link: '/deepin-src-col/sec-5' },
                    { text: '六、更多', link: '/deepin-src-col/sec-6' },
                    { text: '七、归档', link: '/deepin-src-col/sec-7' }
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
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/', // shows on navbar translations menu, can be external
      title: "pzm9012's Site",
      description: "pzm9012's Site",
      themeConfig: {
        sidebar: {
          '/': [
            {
              text: 'Documents',
              items: [
                { text: 'Home', link: '/en/' },
                { text: 'deepin Common Q&A',
                  items: [
                    { text: 'Frequently Asked', link: '/en/deepin-solutions/frequently-asked' },
                    { text: 'Common Problems', link: '/en/deepin-solutions/common' },
                    { text: 'Collections', link: '/en/deepin-solutions/collect' },
                    { text: 'Thanks', link: '/en/deepin-solutions/thanks' }
                  ]
                }
              ]
            }
          ]
        },
        lastUpdatedText: 'Last Updated',
        editLink: {
          pattern: 'https://github.com/pzm9012/doc-vite/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        sidebarMenuLabel: 'Contents'
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/site-logo.png',
    outline: [2, 4], 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pzm9012' }
    ],
    search: {
      provider: 'local'
    }
  }
})
