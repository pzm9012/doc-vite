import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pzm9012 的文稿",
  description: "pzm9012 的文稿",
  base: "/doc-vite/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'deepin 高频问题', link: '/deepin-solutions/论坛发帖提问须知' },
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
                  { text: '一、综合', link: '/deepin-src-col/sec-1' },
                  { text: '二、系统', link: '/deepin-src-col/sec-2' },
                  { text: '三、硬件和设备', link: '/deepin-src-col/sec-3' },
                  { text: '四、应用软件', link: '/deepin-src-col/sec-4' },
                  { text: '五、社区与论坛', link: '/deepin-src-col/sec-5' },
                  { text: '六、更多', link: '/deepin-src-col/sec-6' },
                  { text: '七、归档', link: '/deepin-src-col/sec-7' }
                ]
              },
          ]
        }
        ],
        '/deepin-solutions/': [
          {
            text: 'deepin 高频问题',
            items: [
              { text: '论坛发帖提问须知', link: '/deepin-solutions/论坛发帖提问须知'},
              { text: '系统安装相关', link: '/deepin-solutions/系统安装相关'},
              {
                text: '硬件',
                items: [
                  { text: '常见硬件问题', link: '/deepin-solutions/常见硬件问题'},
                ]
              },
              {
                text: '软件',
                items: [
                  { text: '常见软件问题', link: '/deepin-solutions/常见软件问题'},
                  { text: '更多', link: '/deepin-solutions/Software/Others'}
                ]
              }
            ]
          }
        ],
        '/reprints/': [
          {
            text: '转载文章',
            items: [
              
            ]
          }
        ]
    },
    outline: [2, 4], 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pzm9012' }
    ],
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
    search: {
      provider: 'local'
    }
  }
})
