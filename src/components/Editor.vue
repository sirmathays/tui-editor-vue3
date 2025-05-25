<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, onMounted, watch, nextTick } from 'vue'
import useEditor from '../composables/useEditor'
import { PluginName } from '../utils/TuiPlugins'
import { ToolbarItemOptions } from '@toast-ui/editor/types/ui'
import Editor, { EditorType, PreviewStyle } from '@toast-ui/editor'

interface Props {
    allowFullScreen?: boolean
    darkMode?: boolean
    editorClasses?: object | string | string[]
    enhanced?: boolean
    height?: string
    hideModeSwitch?: boolean
    initialEditType?: EditorType
    language?: string
    plugins?: PluginName[]
    previewStyle?: PreviewStyle
    toolbarItems?: (string | ToolbarItemOptions)[][]
    usageStatistics?: boolean
    useCommandShortcut?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    allowFullScreen: true,
    darkMode: false,
    enhanced: true,
    height: '500px',
    initialEditType: 'markdown',
    plugins: (): PluginName[] => [],
    previewStyle: 'tab',
    toolbarItems: () => [
        ['heading', 'bold', 'italic'],
        ['quote', 'ul', 'ol'],
        ['table', 'link'],
    ],
})

const model = defineModel<string>({ default: '' })
const fullScreen = defineModel<boolean>('fullScreen', { default: false })

const editor = ref<Editor | null>(null)
const editorEl = ref<HTMLDivElement | null>(null)

const emit = defineEmits(['addImage'])
defineExpose({ editor })

watch(fullScreen, (value) => {
    document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => nextTick(() => {
    editor.value = useEditor(editorEl, {
        height: '100cqh',
        hideModeSwitch: props.hideModeSwitch,
        initialEditType: props.initialEditType,
        initialValue: model.value,
        language: props.language,
        plugins: props.plugins,
        previewStyle: props.previewStyle,
        toolbarItems: props.toolbarItems,
        usageStatistics: props.usageStatistics,
        useCommandShortcut: props.useCommandShortcut,
        addImageBlobHook: (blob, callback): void => emit('addImage', { blob, callback }),
        onChange: (e): void => {
            model.value = e.getMarkdown()
        },
    })
}))
</script>

<template>
    <div
        class="tui-editor-vue3-wrapper"
        :style="{ height: !fullScreen ? height : undefined }"
        :class="{
            'tui-editor-vue3-enhanced': enhanced,
            'toastui-full-screen': fullScreen,
            'toastui-editor-dark': darkMode
        }"
        @keydown.escape="fullScreen = false"
    >
        <div ref="editorEl" :class="editorClasses" />
        <div
            class="fullscreen-button-container"
            v-if="props.allowFullScreen"
        >
            <a href="#" class="fullscreen-button" @click.prevent="fullScreen = !fullScreen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
            </a>
        </div>
    </div>
</template>
