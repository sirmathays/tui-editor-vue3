const path = require('path')

module.exports = {
  title: 'My Lib',
  description: 'Just playing around.',
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
          { text: 'Editor', link: '/components/editor' },
          { text: 'Viewer', link: '/components/viewer' },
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
