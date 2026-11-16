// timerWorker.js  
let intervalId = null;
let countdown = 0;

self.onmessage = function (e) {
    const { action, duration } = e.data;

    if (action === 'start') {
        countdown = duration; // 设置倒计时的初始值  
        clearInterval(intervalId); // 清除之前的计时器  
        intervalId = setInterval(() => {
            if (countdown > 0) {
                self.postMessage({ countdown });
                countdown--;
            } else {
                clearInterval(intervalId);
                self.postMessage({ countdown: 0 }); // 倒计时结束  
            }
        }, 1000); // 每秒更新一次  
    } else if (action === 'stop') {
        clearInterval(intervalId); // 停止倒计时  
        intervalId = null;
        self.postMessage({ countdown: countdown }); // 返回当前倒计时值  
    }
};