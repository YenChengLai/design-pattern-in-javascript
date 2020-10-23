// Normal Solution
// function getBonus(performanceLevel, salary) {
//     if (performanceLevel == '5')
//         return salary * 5;
//     else if (performanceLevel == '4')
//         return salary * 4;
//     else if (performanceLevel == '3')
//         return salary * 3;
//     else
//         return salary * 1;
// }

// console.log(getBonus('4', 40000));
// console.log(getBonus('5', 45000));

// Strategy Pattern in classical inheritance
// Below are the strategy functions
function level3() { };
level3.prototype.getBonus = function (salary) {
    return salary * 3;
}

function level4() { };
level4.prototype.getBonus = function (salary) {
    return salary * 4;
}

function level5() { };
level5.prototype.getBonus = function (salary) {
    return salary * 5;
}

// Below are the Context Object to be called by users
function Bonus() {
    this.salary = null;
    this.strategy = null;
};

Bonus.prototype.setSalary = function (salary) {
    this.salary = salary;
}

Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}

Bonus.prototype.getBonus = function () {
    return this.strategy.getBonus(this.salary);
}

// use case
var bonusJimmy = new Bonus();
bonusJimmy.setSalary(48000);
bonusJimmy.setStrategy(new level4());
console.log(bonusJimmy.getBonus());

bonusJimmy.setStrategy(new level5());
console.log(bonusJimmy.getBonus());

