<template>
    <div>
        <CompositionCarmera ref="camera" />
        <img :src="src" alt="" srcset="">
        <button @click="takephoto">拍照</button>
    </div>
</template>

<script setup>
import CompositionCarmera from '@/components/Camera/CompositionCarmera.vue'

import { ref } from "vue"
const camera = ref('')
const src = ref('')

function takephoto() {
    console.log(camera.value);
    console.log(camera.value.drawCanvasImage());
    src.value = camera.value.drawCanvasImage()
    console.log(src.value);
}
</script>

<style lang="scss" scoped></style>