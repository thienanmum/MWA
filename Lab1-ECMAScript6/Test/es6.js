//--- let ---
for (let i = 0; i < 10; i++) { //can not use const
    console.log(i);
}
//console.log(i); //Error: i is not defined

//--- const ---
const employee = {name: "David", sal: 1000};
employee.position = "manager"; // Can add property to object.
//employee = {}; //Error: Assigment to constant varibale
console.log(employee.position);
Object.freeze(employee);
employee.position = "employee"; // Changing the properties of freezed object has no effect.
console.log(employee.position);

//--- Arrow function ---
const multiply = (a, b) => a * b;
console.log(multiply(2,3));
const test = (a,b,c) => console.log(arguments.length);  // Arrow functions don't have arguments
test();

//--- Default Values ---
function log(a=10, b=20) {
    console.log(`${a}, ${b}`);
}
log();
log(1);
log(1,2);

//--- Destructing Arrays and Objects
const arrString = ["an", "nhu", "ky"];
const[an, nhu, ky] = arrString;
// Spread operator
const arrFull = ["teo", ...arrString];
console.log(arrFull);
// Rest operator
const[first, ...rest] = arrString;
console.log(rest);
function sum(a,b,...more) {
    var total = a + b;
    more.forEach(val => total += val);
    return total;
}
console.log(sum(1,2));

//--- for in / for of ---
