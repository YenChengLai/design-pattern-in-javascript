/**
 * Separate repeating function executions into small chucks
 * @param {Array} array Data that will be executed.
 * @param {Function} fn The real working function.
 * @param {number} count The max amount of the executions that will be triggered in the same time.
 * @param {number} interval The interval of each execution.
 */
function TimeChuck(array, fn, count, interval) {
    let obj, timer;

    function start() { // this function executes the passing function
        for (let i = 0; i < Math.min(count || 1, array.length); i++) {
            obj = array.shift(); // get the first element and run the function
            fn(obj);
        }
        console.log('-------------------------');
    }

    return function () {
        timer = setInterval(() => {
            if (array.length === 0) {
                return clearInterval(timer); // clear the interval when all tasks done
            }
            start();
        }, interval);
    }
}

let printNumberEach2Sec = TimeChuck([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], console.log, 5, 2000);
printNumberEach2Sec();