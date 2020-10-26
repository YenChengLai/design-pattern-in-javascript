// Multiply Function
function multiply() {
    console.log('start');
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(multiply(2, 3));

// Cache Proxy
let ProxyMultiply = (function () {
    let cache = {};
    return function () {
        let args = Array.prototype.join.call(arguments, ','); // Stored as key in an object
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = multiply.apply(this, arguments);
    }
})();

// Same operation will be handled by cache
console.log(ProxyMultiply(3, 5));
console.log(ProxyMultiply(3, 5));