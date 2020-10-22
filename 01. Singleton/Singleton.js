function Singleton(name) {
    if (!(this instanceof Singleton)) {
        throw new Error('Please use new operator to initiate an object!');
    }

    this.name = name;
}

Singleton.prototype.getName = function () {
    return this.name;
}

Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

var a = Singleton.getInstance('John');
var b = Singleton.getInstance('Jack');

console.log(a === b);

/**
 * store the output of the passed function, and make sure the output is Singleton
 * @param {Function} fn 
 */
function getSingle(fn) {
    let result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
}

// getSingle use case
function Person() {}

function getPerson() {
    return new Person();
}

let getSinglePerson = getSingle(getPerson);
let personOne = getSinglePerson();
let personTwo = getSinglePerson();
console.log(personOne == personTwo);