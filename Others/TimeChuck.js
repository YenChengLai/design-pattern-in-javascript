function TimeChuck(array, fn, count) {
    let obj, timer;

    function start() {
        for (let i = 0; i < Math.min(count || 1, array.length); i++) {
            obj = array.shift();
            fn(obj);
        }
        console.log('-------------------------');
    }

    return function () {
        timer = setInterval(() => {
            if (array.length === 0) {
                return clearInterval(timer);
            }
            start();
        }, 2000);
    }
}

let printNumberEach2Sec = TimeChuck([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], console.log, 2);
printNumberEach2Sec();