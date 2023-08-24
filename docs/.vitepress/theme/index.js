import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import TuiEditor from 'tui-editor-vue3'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(TuiEditor)
    app.component('DemoContainer', DemoContainer)
  }
}
