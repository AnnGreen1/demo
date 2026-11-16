<template>
  <div>
    <div id="content"></div>
    <div
      v-html="markdowned('# Marked in the browser\n\nRendered by **marked**.')"
    ></div>
    <div
      v-html="
        marked.parse('# Marked in the browser\n\nRendered by **marked**.')
      "
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const cr = ref("CommonRoute.vue");

import { marked } from "marked";
onMounted(() => {
  document.getElementById("content").innerHTML = marked.parse(
    "# Marked in the browser\n\nRendered by **marked**."
  );
});

function markdowned(text) {
  return marked.parse(text);
}
</script>
