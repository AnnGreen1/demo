<template>
  <div>
    <button @click="start">start</button>

    <button @click="stop">stop</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { XfVoiceDictation } from "@muguilin/xf-voice-dictation";

let xfVoice = "";
function start() {
  // 给Dom元素加添事件，来调用开始语音识别！
  xfVoice.start();
}

function stop() {
  // 给Dom元素加添事件，来调用关闭语音识别！
  xfVoice.stop();
}

const count = ref(0);

import { onMounted } from "vue";

onMounted(() => {
  let times = null;

  // 实例化迅飞语音听写（流式版）WebAPI

  xfVoice = new XfVoiceDictation({
    APPID: "692ba086",
    APISecret: "ZTYwM2U0YWI3YTRiOWNiNzZiODI0NDQ0",
    APIKey: "46defb55f280ebe68fd8fcbf882be253",

    // webSocket请求地址 非必传参数，默认为：wss://iat-api.xfyun.cn/v2/iat
    // url: '',

    // 监听录音状态变化回调
    onWillStatusChange: function (oldStatus, newStatus) {
      // 可以在这里进行页面中一些交互逻辑处理：如：倒计时（语音听写只有60s）,录音的动画，按钮交互等！
      console.log("识别状态：", oldStatus, newStatus);
    },

    // 监听识别结果的变化回调
    onTextChange: function (text) {
      // 可以在这里进行页面中一些交互逻辑处理：如将文本显示在页面中
      console.log("识别内容：", text);

      // 如果3秒钟内没有说话，就自动关闭（60s后也会自动关闭）
      if (text) {
        clearTimeout(times);
        times = setTimeout(() => {
          count.value += 1;
          xfVoice.stop();
          if (count.value % 2 == 0) {
            console.log("结束");
          }
        }, 3000);
      }
    },

    // 监听识别错误回调
    onError: function (error) {
      console.log("错误信息：", error);
    },
  });
});
</script>

<style lang="scss" scoped></style>
