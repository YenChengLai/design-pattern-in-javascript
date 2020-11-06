// Observer Object
const observer = {};

// Array to Store all listened functions
observer.listenArray = [];

// listener
observer.listen = function (fn) {
    this.listenArray.push(fn);
}

// trigger all listened function with arguments passed in
observer.trigger = function () {
    for (let i = 0; i < this.listenArray.length; i++) {
        this.listenArray[i].apply(null, arguments);
    }
}

// test cases
let sayHi = name => console.log(`Hi, ${name}!`);
let sayHello = name => console.log(`Hello, ${name}!`);

observer.listen(sayHi);
observer.listen(sayHello);

observer.trigger('John');