
const observer = {};

observer.listenArray = [];

observer.listen = function (fn) {
    this.listenArray.push(fn);
}

observer.trigger = function () {
    for (let i = 0; i < this.listenArray.length; i++) {
        this.listenArray[i].apply(null, arguments);
    }
}