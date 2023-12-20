//spread operator [...] :  the javascript spread operator (...) allows you to quikly copy all 
// element to another variable.

let numbers = [1, 2, 3, 4, 5, 6, 7,]
let num2 = [...numbers]
console.log(num2);

let [no3, no4, ...no5] = numbers;
console.log(no3);
console.log(no4);
console.log(no5);

let a = [1, 2, 3, 4, 5,]
let b = [6, 7, 8, 9,]
let c = [...a, ...b]
console.log(c);