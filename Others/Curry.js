// Before Currying
// let dailyCost = 0;

// function addCost(cost) {
//     dailyCost += cost;
// }

// addCost()(10);
// addCost()(20);
// addCost()(30);
// addCost()();

// console.log(dailyCost);


// After Currying
// put arguments into function cache but not calculate on the fly
// calculate the total in the cache if no arguments passed
// const addCostCurried = (function () {
//     const costArr = [];
//     return function () {
//         if (arguments.length == 0) {
//             return costArr.reduce((acc, curr) => acc + curr, 0);
//         }
//         costArr.push(parseInt(arguments[0]));
//     }
// })();

// addCostCurried(5);
// addCostCurried(10);
// addCostCurried(15);

// console.log(addCostCurried());

// Add Currying Function
const currying = function (fn) {
    var args = [];

    return function () {
        if (arguments.length == 0) {
            return fn.apply(this, args);
        }
        args.push(arguments);
        return arguments.callee;
    }
}

const cost = (function () {
    let total = 0;
    return function () {
        return arguments.reduce((acc, curr) => acc + curr, total);
    }
})();

let addCost = currying(cost);
addCost(100);
addCost(200);
addCost(300);
console.log(addCost());