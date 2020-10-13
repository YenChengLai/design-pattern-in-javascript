Function.prototype.before = function (beforeFn) {
    let _self = this; // use _self to keep this reference, which points to the function
    return function () { // a new function wrapper
        beforeFn.apply(null, arguments); // trigger registered before behavior
        return _self.apply(null, arguments); // trigger function itself
    };
}

Function.prototype.after = function (afterFn) {
    let _self = this;
    return function () {
        var result = _self.apply(null, arguments); // trigger function and record result
        afterFn.apply(null, arguments); // trigger registered after behavior
        return result;
    };
}

function func() {
    console.log('content');
}

func = func.before(function () { // register before and after actions
    console.log('before');
}).after(function () {
    console.log('after');
});

func();