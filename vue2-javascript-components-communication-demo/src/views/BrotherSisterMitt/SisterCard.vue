<!-- SisterCard.vue -->

<template>
  <div class="message">
    <div class="message-header">
      <h5 v-text="theCardTitle"></h5>
    </div>

    <div class="message-body">
      <p class="message-text">我是Sister组件</p>

      <button @click="messageBrother" class="btn">给哥哥发消息</button>

      <div v-if="messageDaughter" class="alert" v-html="messageDaughter"></div>

      <div class="alert" v-if="message" v-html="message"></div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/bus'
export default {
  name: "SisterCard",

  data: () => ({
    theCardTitle: "子组件2",
    message:""
  }),

  methods: {
    messageBrother() {
      emitter.emit("sisterSaid", "messageBrother，妈妈说，该做作业了！(^_^)!!!");
    },
  },
  created() {
    emitter.on("brotherSaid", e => { console.log(e); this.message = e });
  }
};
</script>