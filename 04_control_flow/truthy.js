//const userEmail = "p@piyush.ai";  // it is interpreted as true value.
// const userEmail = "";  // it is interpreted as false value.
const userEmail = [];  // treated as true value.
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0  // true
// false == '' // true
// 0 == ''  // true

// Nullish Coalescing Operator (??): null undefined
// Kind of a fallback to handle errors like no value received from the function call to database.
let val1;
// val1 = 5 ?? 10   // Output: 5
//val1 = null ?? 10   // in place of 10, a complex function would be present that is calling a database and seeking value from it. If no value is received then this operator assigns null value.
//val1 = undefined ?? 15  // Output: 15
val1 = null ?? 10 ?? 20  // Whatever value it gets first is assigned.
console.log(val1);

// Ternary Operator

//condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");