<template>
    <div class="record">
        <div id="result"></div>
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
import './crypto-js.js'
import './enc-base64-min.js'
import { CryptoJSNew } from './HmacSHA1'
import './hmac-sha256'
import { hex_md5 } from './md5'
import Record from './record-sdk';
export default {
    data() {
        return {
            isVoice: false,
            isFinished: false,
            tipMsg: '录音',
            audio: "",
            recorder: new Record(),
            ws: '',
            times: 0,
        }
    },
    methods: {
        startRtasr() {
            console.log('开始语音识别');
            this.initWebsocket()
            // this.onStartVoice()
        },
        renderResult(resultData) {
            let resultText = "";
            let resultTextTemp = "";
            let jsonData = JSON.parse(resultData);
            if (jsonData.action == "started") {
                // 握手成功
                console.log("握手成功");
            } else if (jsonData.action == "result") {
                const data = JSON.parse(jsonData.data)
                console.log(data)
                // 转写结果
                let resultTextTemp = ""
                data.cn.st.rt.forEach((j) => {
                    j.ws.forEach((k) => {
                        k.cw.forEach((l) => {
                            resultTextTemp += l.w;
                        });
                    });
                });
                if (data.cn.st.type == 0) {
                    // 【最终】识别结果：
                    resultText += resultTextTemp;
                    resultTextTemp = ""
                }

                document.getElementById("result").innerText = resultText + resultTextTemp
            } else if (jsonData.action == "error") {
                // 连接发生错误
                console.log("出错了:", jsonData);
            }
        },
        readBolb() {
            setInterval(() => {
                this.recorder.getBlob({
                    success: res => {
                        this.isVoice = false
                        //此处可以获取音频源文件(res)，用于上传等操作
                        console.log('音频源文件', res)

                        console.log(this.times);
                        let start = this.times * 1028;
                        let end = this.times * 1028 + 1028
                        console.log(start);
                        console.log(end);
                        let partBlob = res.slice(start, end)
                        console.log(partBlob);
                        partBlob.arrayBuffer().then(buffer => {
                            console.log(buffer);

                            // console.log(blobitem);
                            this.ws.send(buffer)
                            this.times++

                        }).catch(error => {
                            console.error('Error processing array buffer:', error);
                        });

                        // res.arrayBuffer().then(buffer => {
                        //     console.log(buffer);
                        //     console.log(this.times);
                        //     console.log(this.times + 1);
                        //     console.log(buffer.slice(this.times * 1280, (this.times + 1) * 1280));
                        //     var blobitem = buffer.slice(this.times * 1280, (this.times + 1) * 1280)
                        //     console.log(blobitem);
                        //     // console.log(blobitem);
                        //     this.ws.send(blobitem)
                        //     this.times++
                        //     console.log(blobitem);
                        //     console.log(this.times);
                        // }).catch(error => {
                        //     console.error('Error processing array buffer:', error);
                        // });
                    },
                    error: e => {
                        this.isVoice = false
                    }
                })
            }, 40)
        },
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
        initWebsocket() {
            // 实例化 WebSocket
            this.ws = new WebSocket(this.getWebSocketUrl());
            // this.ws = new WebSocket(`ws://localhost:8080`);
            // 当 WebSocket 创建成功时，触发 onopen 事件
            this.ws.onopen = () => {
                // this.readBolb()
                console.log("onopen");
                this.onStartVoice()
            };
            // 如果出现连接、处理、接收、发送数据失败的时候触发 onerror 事件
            this.ws.onerror = (e) => {
                console.log("websocket出现连接、处理、接收、发送数据失败！");
                this.ws.close();
            };
            // 当客户端收到服务端发送的关闭连接请求时，触发 onclose 事件
            this.ws.onclose = (e) => {
                console.log("websocket关闭连接！");
                console.log(e);
            };
            // 当客户端收到服务端发来的消息时，触发onmessage事件，参数e.data包含server传递过来的数据
            this.ws.onmessage = (e) => {
                console.log(e);
                this.renderResult(e.data);
                // setTimeout(() => {
                //     this.ws.close();
                //     initWebsocket();
                //     // 非最后一句话使用 next() 方法，最后一句话需要使用 last方法
                //     //   stream.last("很高兴见到你");
                // }, 5000);
            };

            this.ws.onclose = function (event) {
                console.log("WebSocket is closed now.");
            };

        },
        stopRtasr() {
            // {"end": true}
            this.ws.send(`{"end": true}`)
            this.ws.close()
        },
        // 开始录音
        onStartVoice() {
            this.onStopAudio()
            this.isFinished = false;
            this.recorder.startRecord({
                success: res => {
                    this.readBolb()
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
        },

    },
    mounted() {
        console.log(import.meta.env.VITE_APP_RTASR_WSSURL);
        this.startRtasr()

        /**
         * 1、外部调用开始语音识别方法
         * 2、连接 websocket，成功回调开始录音
         * 2、录音成功就要读 blob，每30ms发送给 websocket
         * 4、接收 websocket 返回数据，emit 事件（区分中间过程和语音识别最终结果）
         * 
         * 5、外部调用停止录音，关闭 websocket，停止录音，清空录音缓存
         */
    }
}
</script>