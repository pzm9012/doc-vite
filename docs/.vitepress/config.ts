import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pzm9012 的文稿(Vitepress)",
  description: "pzm9012' 的文稿(Vitepress)",
  base: "/doc-vite/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '语雀', link: 'https://yuque.com/pzm9012/ct5ume/' },
      { text: '博客', link: 'https://pzm9012.github.io'},
      { text: 'Vuepress 文档', link: 'https://pzm9012.github.io/doc'}
    ],

    sidebar: [
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
          { text: '六、更多', link: '/deepin-src-col/sec-6' }
        ]
      }
    ],
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
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  }
})
