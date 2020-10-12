Function.prototype.before = function (beforeFn) {
    let _self = this;
    return function () {
        beforeFn.apply(null, arguments);
        return _self.apply(null, arguments);
    };
}

function func() {
    console.log('content');
}

func = func.before(function() {
    console.log('before');
});

func();