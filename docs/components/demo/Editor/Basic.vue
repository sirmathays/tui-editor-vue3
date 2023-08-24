<script setup lang="ts">
import { ref } from 'vue'
import lorem from '../lorem'

const darkMode = ref(true)
const allowFullScreen = ref(true)
const enhanced = ref(true)
const model = ref(lorem)
</script>

<template>
    <div class="demo-container-editor-wrapper">
        <Editor
            :dark-mode="darkMode"
            :enhanced="enhanced"
            :allow-full-screen="allowFullScreen"
            height="350px"
            v-model="model"
        />

        <div class="demo-container-toggle-wrapper">
            <button @click.prevent="enhanced = !enhanced">Enhanced</button>
            <button @click.prevent="darkMode = !darkMode">{{ darkMode ? 'Turn off Dark Mode' : 'Turn on Dark Mode' }}</button>
            <button @click.prevent="allowFullScreen = !allowFullScreen">Allow Full Screen</button>
        </div>
    </div>
</template>

<style>
.demo-container-editor-wrapper {
    margin-left: -10px;
    margin-right: -10px;
}

.demo-container-toggle-wrapper {
    display: flex;
    gap: 5px;
    margin-top: 10px;
}
</style>
