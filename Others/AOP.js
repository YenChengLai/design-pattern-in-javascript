Function.prototype.before = function (beforeFn) {
    let _self = this;
    return function () {
        beforeFn.apply(null, arguments);
        return _self.apply(null, arguments);
    };
}

Function.prototype.after = function (afterFn) {
    let _self = this;
    return function () {
        var result = _self.apply(null, arguments);
        afterFn.apply(null, arguments);
        return result;
    };
}

function func() {
    console.log('content');
}

func = func.before(function () {
    console.log('before');
}).after(function () {
    console.log('after');
});

func();