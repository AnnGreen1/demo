<!-- BrotherCard.vue -->

<template>
  <div class="message">
    <div class="message-header">
      <h5 v-text="theCardTitle"></h5>
    </div>

    <div class="message-body">
      <p class="message-text">我是Brother组件</p>

      <button @click="messageSister" class="btn">给妹妹发消息</button>

      <div v-if="message" v-html="message"></div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/bus'
export default {
  name: "BrotherCard",

  data: () => ({
    theCardTitle: "子组件1",
    message:""
  }),

  methods: {
    messageSister() {
      emitter.emit("brotherSaid", "messageSister，妈妈说，该做作业了！(^_^)!!!");
    },
  },
  created() {
    emitter.on("sisterSaid", e => { console.log(e); this.message = e});
  }
};
</script>