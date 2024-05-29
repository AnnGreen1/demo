<template>
    <!--
        【前端】vue+recorder实现录音功能
        https://www.jianshu.com/p/f5637e838af0
    -->
    <div class="record">
        <h1>{{ tipMsg }}</h1>
        <button @click="onStartVoice">开始</button>
        <button @click="onEndVoice">结束</button>
        <button @click="onPlayAudio">播放</button>
        <div class="record-play" v-show="isFinished">
            <h2>Current voice player is:</h2>
            <audio id="audioVoice" controls autoplay></audio>
        </div>
    </div>
</template>

<script>
import Record from './record-sdk';
export default {
    data() {
        return {
            isVoice: false,
            isFinished: false,
            tipMsg: '录音',
            audio: "",
            recorder: new Record()
        }
    },
    methods: {
        getWebSocketUrl() {
            // 请求地址根据语种不同变化
            var url = import.meta.env.VITE_APP_RTASR_WSSURL;
            var appId = import.meta.env.VITE_APP_RTASR_ADDID;
            var secretKey = import.meta.env.VITE_APP_RTASR_SECRETKEY;
            var ts = Math.floor(new Date().getTime() / 1000);
            var signa = hex_md5(appId + ts);
            var signatureSha = CryptoJSNew.HmacSHA1(signa, secretKey);
            var signature = CryptoJS.enc.Base64.stringify(signatureSha);
            signature = encodeURIComponent(signature);
            return `${url}?appid=${appId}&ts=${ts}&signa=${signature}`;
        },
        // 开始录音
        onStartVoice() {
            this.onStopAudio()
            this.isFinished = false;
            this.recorder.startRecord({
                success: res => {
                    this.isVoice = true
                },
                error: e => {
                    this.isVoice = false
                    this.$toast(e)
                }
            });
        },

        // 结束录音
        onEndVoice() {
            this.isFinished = false;
            this.recorder.stopRecord({
                success: res => {
                    this.isVoice = false
                    //此处可以获取音频源文件(res)，用于上传等操作
                    console.log('音频源文件', res)
                },
                error: e => {
                    this.isVoice = false
                }
            });
        },

        // 播放录音
        onPlayAudio() {
            this.isVoice = false
            this.isFinished = true;
            this.audio = document.getElementById("audioVoice");
            this.recorder.play(this.audio);
        },

        // 停止播放录音
        onStopAudio() {
            this.recorder.clear(this.audio);
        }
    },
    mounted() {
        console.log(import.meta.env.VITE_APP_RTASR_WSSURL);
    }
}
</script>