function Singleton(name) {
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