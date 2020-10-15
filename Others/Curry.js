// Before Currying
let dailyCost = 0;

function addCost (cost) {
    dailyCost += cost;
}

addCost(10);
addCost(20);
addCost(30);

console.log(dailyCost);