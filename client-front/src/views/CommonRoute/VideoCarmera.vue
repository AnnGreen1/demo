<template>
<div>
    <video id="preview" autoplay></video>
    <canvas id="canvas" style="display: none;"></canvas>
    <img id="photo" alt="Photo" style="display: none;" />
    <button id="takePhotoButton">拍照</button>

    <video id="recording" controls style="display: none;"></video>
    <button id="startRecordingButton">开始录制</button>
    <button id="stopRecordingButton">停止录制</button>
</div>
</template>

<script setup>
/**
 * 博客地址
 * https://refblogs.com/article/475
 */
import { onMounted } from 'vue';

/**
 * todo props 修改
 */
const props = defineProps({
    video: {
        type: Object,
        default: () => {
            return {
                width: 320,
                height: 240,
                deviceId: undefined
            }
        }
    }
})

//使用的ebml.js
//mkv容器格式封装

// const EBML = require('./libs/EBML.js');
// import ebml from 'ebml'; // 导入ebml依赖
// import { EBML } from 'ebml/lib/ebml.js'; // 导入ebml依赖

import './EBML.js'
async function getSeekableBlob(originBlob) {
    const Decoder = new EBML.Decoder();
    const buf = await originBlob.arrayBuffer()
    console.log('buf', buf);
    const ebmlElms = Decoder.decode(buf);
    console.log(ebmlElms);

    const reader = new EBML.Reader();
    ebmlElms.forEach(element => {
        reader.read(element)
    });
    reader.stop();
    console.log('reader', reader)

    const refinedMetadataBuf = EBML.tools.makeMetadataSeekable(
        reader.metadatas,
        reader.duration,
        reader.cues
    )
    console.log('refinedMetadataBuf', refinedMetadataBuf)
    const body = buf.slice(reader.metadataSize)
    const aimBlob = new Blob([refinedMetadataBuf, body], {
        type: 'video/webm'
    })
    console.log('aimBlob', aimBlob)
    var videoURL = URL.createObjectURL(aimBlob);
    console.log('videoURL', videoURL);
    var a = document.createElement("a");    //模拟链接，进行点击下载
    a.href = videoURL;
    a.style.display = "none";    //不显示
    a.download = "video.mp4";
    a.click();
    // return aimBlob
}


onMounted(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                var videoElement = document.getElementById("preview");
                var canvasElement = document.getElementById("canvas");
                var context = canvasElement.getContext("2d");
                var imageElement = document.getElementById("photo");
                var takePhotoButton = document.getElementById("takePhotoButton");

                videoElement.srcObject = stream;

                // 拍照，包括画在 canvas 和下载到本地
                takePhotoButton.addEventListener("click", function () {
                    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
                    imageElement.src = canvasElement.toDataURL("image/png");
                    imageElement.style.display = "block";

                    // 下载图片
                    var link = document.createElement('a');
                    link.href = imageElement.src
                    link.download = `图片-${new Date().getTime()}.png`; // 设置下载文件的文件名
                    link.click();

                });

                var recordingElement = document.getElementById("recording");
                var startRecordingButton = document.getElementById("startRecordingButton");
                var stopRecordingButton = document.getElementById("stopRecordingButton");

                var mediaRecorder;

                startRecordingButton.addEventListener("click", function () {
                    var chunks = [];
                    mediaRecorder = new MediaRecorder(stream);

                    mediaRecorder.ondataavailable = function (e) {
                        chunks.push(e.data);
                    };

                    mediaRecorder.onstop = function () {
                        var blob = new Blob(chunks, { type: "video/webm" });
                        recordingElement.src = URL.createObjectURL(blob);

                        getSeekableBlob(blob);
                        
                        // const aimBlob = getSeekableBlob(blob);

                        // var videoURL = URL.createObjectURL(aimBlob);
                        // console.log('videoURL', videoURL);
                        // var a = document.createElement("a");    //模拟链接，进行点击下载
                        // a.href = videoURL;
                        // a.style.display = "none";    //不显示
                        // a.download = "video.mp4";
                        // a.click();
                    };

                    mediaRecorder.start();
                    recordingElement.style.display = "block";

                });

                stopRecordingButton.addEventListener("click", function () {
                    mediaRecorder.stop();
                });
            })
            .catch(function (error) {
                console.error("获取摄像头输入流失败:", error);
            });
    } else {
        console.error("浏览器不支持摄像头调用");
    }
})
</script>

<style lang="scss" scoped></style>