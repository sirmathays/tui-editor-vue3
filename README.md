# Toast UI Editor for Vue 3

This library serves as a Vue 3 wrapper for the incredible [Toast UI Markdown Editor](https://nhn.github.io/tui.editor).

⚠️ The library is still in development and limited in its functionalities - however the core features are working.

## Installation

```bash
npm install --save tui-editor-vue3
```

## Usage

### Editor

Import the Editor component and the CSS.

```html
<script setup>
import { ref } from 'vue'
import { Editor } from 'tui-editor-vue3'
import 'tui-editor-vue3/dist/style.css'

const content = ref('# Hello, world!')
</script>

<template>
  <Editor v-model="content" />
</template>
```

#### Editor Props

| Name               | Type                                 | Default      | Description |
| ------------------ | ------------------------------------ | ------------ | ----------- |
| allowFullScreen    | `boolean`                            | `true`       | Custom addition to allow fullscreen mode |
| darkMode           | `boolean`                            | `false`      | Boolean value to set dark mode |
| editorClasses      | `object \| string \| string[]`       | `undefined`  | Classes to bind to the editor element |
| enhanced           | `boolean`                            | `true`       | Custom additions to the CSS both in "normal" and fullscreen mode |
| height             | `string`                             | `'500px'`    |
| hideModeSwitch     | `boolean`                            | `undefined`  | Defines whether to hide the mode switch tab |
| initialEditType    | `EditorType`                         | `'markdown'` | Sets the editor type on initial load |
| language           | `string`                             | `undefined`  | Sets the language of the editor |
| plugins            | `PluginName[]`                       | `[]`         |
| previewStyle       | `PreviewStyle`                       | `'tab'`      | Sets the preview style in the markdown mode |
| toolbarItems       | `(string \| ToolbarItemOptions)[][]` | \*           |
| usageStatistics    | `boolean`                            | `undefined`  |
| useCommandShortcut | `boolean`                            | `undefined`  |
| modelValue**       | `string`                             | `undefined`  | Used with `v-model` |

- \* `[['heading', 'bold', 'italic'], ['quote', 'ul', 'ol'], ['table', 'link']]`

#### Editor Events

| Name              | Parameters | Description       |
| ----------------- | ---------- | ----------------- |
| update:modelValue | `string`   | Used with `v-model`, called with input |
| addImage          | *          | Called when using image upload |
| fullScreenChange  | `boolean`  | Called when toggling fullscreen mode |

- \* `{ blob, callback }: { blob: File | Blob, callback: HookCallback }`

### Viewer

Import the Viewer component and the CSS.

```html
<script setup>
import { ref } from 'vue'
import { Viewer } from 'tui-editor-vue3'
import 'tui-editor-vue3/dist/style.css'

const content = ref('# Hello, world!')
</script>

<template>
  <Viewer :value="content" />
</template>
```

#### Viewer Props

| Name     | Type           | Default     | Description |
| -------- | -------------- | ----------- | ----------- |
| darkMode | `boolean`      | `false`     | Boolean value to set dark mode |
| plugins  | `PluginName[]` | `[]`        |
| value    | `string`       | `undefined` | The value to render with the viewer |

## Notes

This library is still in development and limited in its functionalities - in time I will put some more work into it to make it more feature complete.

## License

Toast UI Editor for Vue 3 is open-sourced software licensed under the [MIT license](LICENSE).
