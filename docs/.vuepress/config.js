module.exports = {
  base: '/amanda-vue-docs/',
  title: 'AmandaVue',
  ga: 'UA-85991013-5',
  description: '打造一套属于自己的装备',
  head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['script', { async: 'async', type: 'text/javascript' }, 'var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?22a0ab0b25c4b63f25e294e1585f3aa5";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();']
  ],
  markdown: {
      toc: {
          includeLevel: [2, 3, 4, 5, 6]
      }
  },
  themeConfig: {
      repo: 'amanda-vue',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: '错别字纠正',
      sidebarDepth: 3,
      nav: [{
              text: '正文',
              link: '/art/m/',
          },
          {
              text: '王小峰的博客',
              link: 'https://hongtanhao.github.io/'
          },
          {
              text: '关于',
              link: '/about/'
          }
      ],
      sidebar: {
          '/art/m/': [
              'install',
              'a',
              'divider',
              'icon',
              'tabs',
              'button',
              'pdf',
              'echarts'
          ]
      }
  }
}