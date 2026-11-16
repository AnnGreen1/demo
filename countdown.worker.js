// 接收主线程的启动命令
let timerId = null;
let endTime = 0; // 倒计时结束的绝对时间戳

self.onmessage = function (e) {
  const { command, duration } = e.data; // duration: 倒计时总时长(毫秒)

  if (command === "start") {
    endTime = Date.now() + duration;

    // 清除之前的定时器
    if (timerId) clearInterval(timerId);

    // 每隔一段时间（如200ms）计算并发送剩余时间
    timerId = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      self.postMessage({ remaining });

      if (remaining <= 0) {
        clearInterval(timerId);
        timerId = null;
        self.postMessage({ finished: true });
      }
    }, 200); // 更新间隔可调整，越短越平滑，开销也越大
  } else if (command === "stop") {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }
};
