// Each function for Iteration
function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

each([1, 2, 3], function (obj) {
    console.log(obj);
});

// Outer Iterator
function Iterator(object) {
    let current = 0;

    return {
        next: function () {
            current++;
        },
        isDone: function () {
            return current >= object.length;
        },
        getCurrentItem: function () {
            return object[current];
        }
    }
}

let iter = Iterator([1, 2, 3]);
console.log(iter.next());
console.log(iter.isDone());
console.log(iter.getCurrentItem());