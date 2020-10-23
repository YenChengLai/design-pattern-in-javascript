// Normal Solution
function getBonus(performanceLevel, salary) {
    if (performanceLevel == '5')
        return salary * 5;
    else if (performanceLevel == '4')
        return salary * 4;
    else if (performanceLevel == '3')
        return salary * 3;
    else
        return salary * 1;
}

console.log(getBonus('4', 40000));
console.log(getBonus('5', 45000));