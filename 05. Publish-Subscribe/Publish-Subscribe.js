// Observer Object
const observer = {};

// Array to Store all listened functions
observer.listenArray = [];

// listener
observer.listen = function (key, fn) {
    if (!this.listenArray[key]) {
        this.listenArray[key] = [];
    }

    this.listenArray[key].push(fn);
}

// trigger all listened function with arguments passed in
observer.trigger = function () {
    let key = Array.prototype.shift(arguments),
        fns = this.listenArray[key];

    if (!fns || fns.length == 0) {
        return false;
    }

    for (let i = 0; i < fns.length; i++) {
        fns.apply(null, arguments);
    }
}

// test cases
let sayHi = name => console.log(`Hi, ${name}!`);
let sayHello = name => console.log(`Hello, ${name}!`);

observer.listen(sayHi);
observer.listen(sayHello);

observer.trigger('John');