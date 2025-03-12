const score = 400; //JS auto detects it as a number.
const balance = new Number(400); //Using Number Function to explicitly define number in JS.
console.log(score);  // 400
console.log(balance);  // [Number: 400]

// Note: Number has comparatively less prototype properties(methods) than String.
// Methods with Examples:
// 1. balance.toString() : This converts a number into string.
// 2. balance.toString().length : Once we convert it to String, all properties/ methods of Strings are now open to us such as length.
// 3. balance.toFixed(2) : Used to reduce or round off to specific decimal values.
// Use cases: a. After calculation of GST ; b. In ECommerce Websites.
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber1 = 23.8966;
console.log(otherNumber1.toPrecision(3)); // Output: 23.9
const otherNumber2 = 123.8966;//Round off to nearest integer.
console.log(otherNumber2.toPrecision(3)); // Output: 124
const otherNumber3 = 1123.8966;
console.log(otherNumber3.toPrecision(3)); //Output: 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //By default it converts into US Standards.
const other = 2000000;
console.log(other.toLocaleString('en-IN')); //As per Indian Standards.

// Other methods:
//1 .MAX_VALUE
//2 .MIN_VALUE
//3 .MAX_SAFE_INTEGER
//4 .MIN_SAFE_INTEGER

// +++++++++ Maths +++++++++
//Maths library comes along with JS
// Methods:
// 1. Math.abs() :Converts +ve/-ve integer values to positive
// 2. Math.round(4.3) //Output: 4
// 3. Math.round(4.6) //Output: 5
// 4. Math.ceil(4.2) //Output : 5(gives top value)
// 5. Math.floor(4.9) //Output: 4(gives bottom value)
// 6. Math.min(4,3,6,8) //Output: 3
// 7. Math.max(4,3,6,8) //Output: 8
// 8. Math.random() //Gives Random value between 0 & 1 in decimals.
// Math.random() tricks:
// Math.random()*10
// Math.random()*10 + 1 //This assures that values are atleast 1 & more than 1.
// (Math.random()*10) + 1 //To avoid any BODMAS rule miscalculation.

//Trick to randomize between range:
const min = 10;
const max = 20;
const randomValue = Math.floor(Math.random() * (max-min+1) + min);
console.log(randomValue);
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

// A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,11] m convert ho jaega....