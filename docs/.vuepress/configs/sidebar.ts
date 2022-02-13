import type { SidebarConfig } from '@vuepress/theme-default'

export const config: SidebarConfig = {
  '/guide/peckotmc/': [
    {
      text: 'PeckotMC 帮助文档',
      children: [
        '/guide/peckotmc/README.md',
        '/guide/peckotmc/profile.md',
      ],
    },
  ],
}