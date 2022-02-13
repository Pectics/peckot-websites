import type { NavbarConfig } from '@vuepress/theme-default'

export const config: NavbarConfig = [
  {
    text: '帮助文档',
    children: [
      {
        text: 'PeckotMC 帮助文档',
        link: '/guide/peckotmc/',
      },
      {
        text: '其他文档',
        link: '/guide/other/',
      },
    ],  
  },
  {
    text: '开发文档',
    children: [
      {
        text: 'PeckotAPI 开发文档',
        link: '/develop/peckotapi/',
      },
    ],
  },
  {
    text: 'Peckot 官网',
    link: 'https://peckot.com',
  },
  {
    text: 'Peckot 社区',
    link: 'https://community.peckot.com',
  },
]