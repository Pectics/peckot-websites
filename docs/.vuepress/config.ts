import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs';

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({

  lang: 'zh-CN',
  title: 'Peckot 文档',
  description: 'Peckot Studios 的官方文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'favicon.png',
      },
    ],
  ],

  themeConfig: {

    logo: '/images/homepage.logo.png',

    repo: 'Pectics/peckot-vuepress-docs',

    docsDir: 'docs',

    locales: {
      '/': {
        navbar: navbar.config,

        sidebar: sidebar.config,

        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  },

  plugins: [

    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],

    // [
    //     '@vuepress/plugin-docsearch',
    //     {
    //         apiKey: '[待编辑]',
    //         indexName: 'vuepress',
    //         searchParameters: {
    //             facetFilters: ['tags:v2'],
    //         },
    //         locales: {
    //             '/': {
    //                 placeholder: '搜索文档',
    //                 translations: {
    //                     button: {
    //                         buttonText: '搜索文档',
    //                         buttonAriaLabel: '搜索文档',
    //                     },
    //                     modal: {
    //                         searchBox: {
    //                             resetButtonTitle: '清除查询条件',
    //                             resetButtonAriaLabel: '清除查询条件',
    //                             cancelButtonText: '取消',
    //                             cancelButtonAriaLabel: '取消',
    //                         },
    //                         startScreen: {
    //                             recentSearchesTitle: '搜索历史',
    //                             noRecentSearchesText: '没有搜索历史',
    //                             saveRecentSearchButtonTitle: '保存至搜索历史',
    //                             removeRecentSearchButtonTitle: '从搜索历史中移除',
    //                             favoriteSearchesTitle: '收藏',
    //                             removeFavoriteSearchButtonTitle: '从收藏中移除',
    //                         },
    //                         errorScreen: {
    //                             titleText: '无法获取结果',
    //                             helpText: '你可能需要检查你的网络连接',
    //                         },
    //                         footer: {
    //                             selectText: '选择',
    //                             navigateText: '切换',
    //                             closeText: '关闭',
    //                             searchByText: '搜索提供者',
    //                         },
    //                         noResultsScreen: {
    //                             noResultsText: '无法找到相关结果',
    //                             suggestedQueryText: '你可以尝试查询',
    //                             openIssueText: '你认为该查询应该有结果？',
    //                             openIssueLinkText: '点击反馈',
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // ],

  ],

})