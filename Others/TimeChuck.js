function TimeChuck(array, fn, count) {
    let obj, timer;

    function start() {
        for (let i = 0; i < Math.min(count || 1, array.length); i++) {
            obj = array.shift();
            fn(obj);
        }
    }

    return function () {
        timer = setInterval(() => {
            if (array.length === 0) {
                return clearInterval(timer);
            }
            start();
        }, 200);
    }
}