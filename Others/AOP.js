Function.prototype.before = function (beforeFn) {
    let _self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    };
}

let func = function() {
    console.log('content');
}

