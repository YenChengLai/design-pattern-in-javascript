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
var c = Singleton();

console.log(a === b);