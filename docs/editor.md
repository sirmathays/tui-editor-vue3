<script setup>
import Basic from './demo/Editor/Basic.vue'
</script>

# Editor

Description of the component.

## Example Usage

<DemoContainer>
  <Basic />
</DemoContainer>

<<< @/demo/Editor/Basic.vue

## Reference

### Properties

| Name            | Type | Default |
| ------------------ | ---- | ------- |
| allowFullScreen    | `boolean`                            | `true` |
| darkMode           | `boolean`                            | `false` |
| editorClasses      | `object \| string \| string[]`       | `undefined` |
| enhanced           | `boolean` | `false`                  | `true` |
| height             | `string`                             | `'500px'` |
| hideModeSwitch     | `boolean`                            | `undefined` |
| initialEditType    | `EditorType`                         | `'markdown'`
| language           | `string`                             | `undefined` |
| plugins            | `PluginName[]`                       | `[]` |
| previewStyle       | `PreviewStyle`                       | `'tab'` |
| toolbarItems       | `(string \| ToolbarItemOptions)[][]` | \* |
| usageStatistics    | `boolean`                            | `undefined` |
| useCommandShortcut | `boolean`                            | `undefined` |
| modelValue**       | `string`                             | `undefined` |

- \* `[['heading', 'bold', 'italic'], ['quote', 'ul', 'ol'], ['table', 'link']]`
- \** Used for v-model

### Events

| Name              | Parameters | Description       |
| ----------------- | ---------- | ----------------- |
| update:modelValue | `string`   | Used with v-model, called with input |
| addImage          | *          | Called when using image upload |
| fullScreenChange  | `boolean`  | Called when toggling fullscreen mode |

- \* `{ blob, callback }: { blob: File | Blob, callback: HookCallback }`
