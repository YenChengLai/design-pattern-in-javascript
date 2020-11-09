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
    // get first parameter as key, and use key to get registered function Array
    let key = Array.prototype.shift.call(arguments),
        fns = this.listenArray[key];

    // return false if no function registered
    if (!fns || fns.length == 0) {
        return false;
    }

    for (let i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments);
    }
}

// test cases
let sayHi = name => console.log(`Hi, ${name}!`);
let sayHello = name => console.log(`Hello, ${name}!`);

observer.listen('John', sayHi);
observer.listen('John', sayHello);
observer.listen('Peter', sayHello);

// first parameter is key, second is name for sayHi and sayHello function
observer.trigger('John', 'John');

// installer
function installer(obj) {
    for (var key of Object.keys(observer)) {
        obj[key] = observer[key];
    }
}

let observer2 = {};
installer(observer2);

// unsubscribe function
observer.unsubscribe = function (key, fn) {
    let fns = this.listenArray[key];

    // return false if no function subscribed
    if (!fns) {
        return false;
    }

    // if no specific function is assigned to unsubscribe, unsubscribe all
    if (!fn) {
        fns.length = 0;
    } else {
        // find the specific passed in fn to unsubscribe
        for (let i = fns.length - 1; i >= 0; i--) {
            if (fns[i] == fn) {
                fns.splice(i, 1);
            }
        }
    }

}