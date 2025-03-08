// Airthmatic operators
let a = 4;
let b = 3;

console.log (a + b)
console.log (a - b)
console.log (a * b)
console.log (a / b)
console.log (a % b)

// Comparison operator - will always result in boolean
let a1:number = 7;
let b1 = 13;

console.log ("-----------------")
console.log (a1 == b1);
console.log (a1 === b1);
console.log (a1 != b1);
console.log (a1 > b1);
console.log (a1 >= b1);
console.log (a1 < b1);
console.log (a1 <= b1);

// Logical operator - will always return in boolean
let isTrue = true;
let isFalse = false;

console.log ("-----------------")
console.log (isTrue && isFalse)
console.log (isTrue || isFalse)
console.log (isTrue && !isFalse)

// Assignment operator
let number = 8
console.log ("-----------------")
console.log (number += 5)
number = 8
console.log (number -= 5)
number = 8
console.log (number *= 5)
number = 8
console.log (number /= 5)
number = 8
console.log (number %= 5)

// Ternary operator
let age = 17.99999999;
console.log ("-----------------")
console.log (age >= 18 ? "Adult" : "Minor")