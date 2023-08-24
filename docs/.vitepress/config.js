const path = require('path')

module.exports = {
  title: 'Toast UI Editor for Vue 3',
  description: 'Toast UI Markdown Editor wrapper written for Vue 3!',
  themeConfig: {
    repo: 'https://github.com/sirmathays/tui-editor-vue3',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'Editor', link: '/editor' },
          { text: 'Viewer', link: '/viewer' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'tui-editor-vue3': path.resolve(__dirname, '../../src'),
      }
    }
  }
}
