function multiply() {
    console.log('start');
    return arguments.reduce((x, y) => x * y);
}

console.log(multiply(2, 3));