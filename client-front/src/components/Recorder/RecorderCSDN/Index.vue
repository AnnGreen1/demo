<template>
    <!--
        Vue.js实战——封装浏览器录音组件_6
        https://blog.csdn.net/dobuy/article/details/87348198
    -->
    <div class="record">
        <h1>Click following button to record voice:</h1>
        <input @click="startRecord" type="button" value="录音">
        <input @click="stopRecord" type="button" value="停止">
        <input @click="play" type="button" value="播放">
        <div class="record-play" v-show="isFinished">
            <h2>Current voice player is:</h2>
            <audio controls autoplay></audio>
        </div>
    </div>
</template>

<script>
import Record from "./record-sdk";
export default {
    name: "Record",
    data() {
        return {
            isFinished: false,
            audio: "",
            recorder: new Record()
        };
    },
    methods: {
        startRecord: function () {
            console.log("start to record now.");
            let self = this;
            self.isFinished = false;
            self.recorder.startRecord({
                success: res => {
                    console.log("start record successfully.");
                },
                error: res => {
                    console.log("start record failed.");
                }
            });
        },
        stopRecord: function () {
            console.log("stop record now.");
            let self = this;
            self.isFinished = false;
            self.recorder.stopRecord({
                success: res => {
                    //此处可以获取音频源文件(res)，用于上传等操作
                    console.log("stop record successfully.");
                },
                error: res => {
                    console.log("stop record failed.");
                }
            });
        },
        play: function () {
            console.log("play record now.");
            let self = this;
            self.isFinished = true;
            self.audio = document.querySelector("audio");
            self.recorder.play(self.audio);
        }
    }
};
</script>