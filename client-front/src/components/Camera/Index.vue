<template>
  <div class="video-box" v-show="videoVisible">
    <video id="video"></video>
    <canvas id="canvas" v-show="canvasVisible"></canvas>
  </div>
</template>

<script>
//   import { $emit } from '../utils/gogocodeTransfer';
export default {
  // name: 'usb',
  props: {
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
  },
  data() {
    return {
      stream: null,
      available: false,
    };
  },
  mounted() {
    this.usbTest(this.width, this.height);
  },
  beforeUnmount() {
    this.stopNavigator();
  },
  methods: {
    // 启用usb摄像头读取流
    usbTest(width, height) {
      const that = this;
      //访问摄像头
      if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
        //调用用户媒体设备, 访问摄像头
        that.getUserMedia({ video: { width: width, height: height } });
      } else {
        console.error('不支持访问用户媒体');
        //   $emit(that, 'available', false);
        //   $emit(that, 'update:usbState', false);

        this.$emit('available', false);
        this.$emit('update:usbState', false);
      }
    },
    //访问用户媒体设备的兼容方法
    getUserMedia(constraints) {
      const that = this;
      if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices.getUserMedia(constraints).then(that.success).catch(that.error);
      } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints, that.success, that.error);
      } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia(constraints, that.success, that.error);
      } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constraints, that.success, that.error);
      }
    },
    //成功回调
    success(stream) {
      const that = this;
      const video = document.getElementById('video');

      console.log('usb成功');
      // $emit(that, 'available', true);
      // $emit(that, 'update:usbState', true);

      this.$emit('available', true);
      this.$emit('update:usbState', true);

      // if (that.from === 'evaluation' || that.from === 'login') {
      that.stream = stream;
      video.srcObject = that.stream;
      video.play();
      this.$emit('getImage');
      // }
    },
    //失败回调
    error(error) {
      const that = this;
      console.log('usb失败');
      console.log('失败error--->', error);
      // $emit(that, 'available', false);
      // $emit(that, 'update:usbState', false);
    },
    // canvas获取base64图片
    drawCanvasImage() {
      const video = document.getElementById('video');
      const canvas = document.getElementById('canvas');
      canvas.width = this.width;
      canvas.height = this.height;

      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
      // 获取图片，数据格式为base64
      return canvas.toDataURL('image/png');
    },
    // 关闭usb流
    stopNavigator() {
      if (this.stream) {
        this.stream.getTracks().forEach(function (track) {
          track.stop();
        });
        console.log('usb关闭');
      }
    },
  },
  emits: ['available', 'update:usbState', 'getImage'],
  expose: ['drawCanvasImage'],
};
</script>