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
function addCostCurried() {
    const costArr = [];
    return function () {
        if (arguments.length == 0) {
            return costArr.reduce((acc, curr) => acc + curr, 0);
        }
        costArr.push(parseInt(arguments[0]));
    }
}

const count = addCostCurried();

count(5);
count(10);
count(15);

console.log(count());