import path from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Toast UI Editor for Vue 3',
  description: 'Toast UI Markdown Editor wrapper written for Vue 3!',
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Editor', link: '/editor' },
          { text: 'Viewer', link: '/viewer' },
        ],
      }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/sirmathays/tui-editor-vue3' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        'tui-editor-vue3': path.resolve(__dirname, '../../src'),
      }
    }
  }
})
