// console.log some random messages. These print in the console tab of the dev tools
console.log("hello");
console.log("1 + 2 = " + (1 + 2));
console.log("-----------------------");

// console.log an addition of two variables, which are defined as integers
var x = 1;
var y = 8;
console.log("When x = 1 and y = 8, and then you add them together:")
console.log(x + y);
console.log("-----------------------");

// Redefine variables
var x = 5;
var y = 8;
var z = 12;

// Functions for calculations using above variables
// With return functions, you can have everything in the same line
function add(x, y, z) {
    return x + y + z;
}

function subtract(x, y, z) {
    return x - y - z;
}

function multiply(x, y, z) {
    return x * y * z;
}

// Repeat add function, but without return
function addition(x, y, z) {
    console.log(x + y + z);
}

// Execute the functions
var result = add(x, y, z);
console.log(" 5 + 8 + 12 = " + result);
console.log("-----------------------");

var result = subtract(x, y, z);
console.log(" 5 - 8 - 12 = " + result);
console.log("-----------------------");

var result = multiply(x, y, z);
console.log(" 5 * 8 * 12 = " + result);
console.log("-----------------------");

console.log("Redo the addition calculation");
console.log("5 + 8 + 12 =")
addition(x, y, z);
console.log("-----------------------");