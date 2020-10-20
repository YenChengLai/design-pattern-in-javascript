Function.prototype.uncurrying = function () {
    const _self = this; // use _self to store Function
    return function () {
        const obj = Array.prototype.shift.call(arguments); // flatten the args
        return _self.apply(obj, arguments); // run original function with passing args
    }
}

const push = Array.prototype.push.uncurrying();
(function () {
    push(arguments, 4);
    console.log(arguments);
})(1, 2, 3);