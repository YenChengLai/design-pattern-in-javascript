// Multiply Function
function multiply() {
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i];
    }
    return total;
}

console.log(multiply(2, 3));

// Plus Function
function plus() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// Cache Proxy with Factory design (Remove IIFE)
let proxyCacheFactory = function (fn) {
    let cache = {};
    return function () {
        let args = Array.prototype.join.call(arguments, ','); // Stored as key in an object
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = fn.apply(this, arguments); // trigger function and store result
    }
};

// use curry function to create functions
let proxyMultiply = proxyCacheFactory(multiply),
    proxyPlus = proxyCacheFactory(plus);

// Same operation will be handled by cache
console.log(proxyMultiply(3, 5));
console.log(proxyPlus(3, 5));