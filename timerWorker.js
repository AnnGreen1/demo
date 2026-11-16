// timerWorker.js  
let timerId = null;

self.onmessage = function (e) {
    const { action, duration } = e.data;

    if (action === 'start') {
        timerId = setTimeout(() => {
            self.postMessage({ action: 'timeout' });
        }, duration);
    } else if (action === 'stop') {
        clearTimeout(timerId);
        timerId = null;
    }
};