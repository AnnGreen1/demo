<template>
    <div class="video-box" v-show="videoVisible">
        <video id="video"></video>
        <canvas id="canvas" v-show="canvasVisible"></canvas>
    </div>
</template>


<script setup>
import { ref, onMounted, onBeforeMount } from "vue"
const props = defineProps({
    from: {
        type: String,
        default: '',
    },
    videoVisible: {
        type: Boolean,
        default: true,
    },
    canvasVisible: {
        type: Boolean,
        default: true,
    },
    width: {
        type: Number,
        default: 180,
    },
    height: {
        type: Number,
        default: 120,
    },
    usbState: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['available', 'update:usbState', 'getImage'])

const stream = ref(null)
const available = ref(false)

// 启用usb摄像头读取流
function usbTest(width, height) {
    //访问摄像头
    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
        //调用用户媒体设备, 访问摄像头
        getUserMedia({ video: { width: width, height: height } });
    } else {
        console.error('不支持访问用户媒体');

        emit('available', false);
        emit('update:usbState', false);
    }
}

//访问用户媒体设备的兼容方法
function getUserMedia(constraints) {
    if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints, success, error);
    } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia(constraints, success, error);
    } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constraints, success, error);
    }
}

//成功回调
function success(stream) {

    const video = document.getElementById('video');

    console.log('usb成功');

    emit('available', true);
    emit('update:usbState', true);

    stream.value = stream;
    video.srcObject = stream.value;
    video.play();
    emit('getImage');
}

//失败回调
function error(error) {
    console.log('usb失败');
    console.log('失败error--->', error);
    emit('available', false);
    emit('update:usbState', false);
}

// canvas获取base64图片
function drawCanvasImage() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    canvas.width = props.width;
    canvas.height = props.height;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, props.width, props.height, 0, 0, props.width, props.height);
    // 获取图片，数据格式为base64
    return canvas.toDataURL('image/png');
}

// 关闭usb流
function stopNavigator() {
    if (stream.value) {
        stream.value.getTracks().forEach(function (track) {
            track.stop();
        });
        console.log('usb关闭');
    }
}


onBeforeMount(() => {
    stopNavigator();
})

onMounted(() => {
    usbTest(props.width, props.height)
})

defineExpose({
    drawCanvasImage,
})
</script>