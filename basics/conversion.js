let score = "piyush"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 //"33" => 33
 //"33abc" => NaN (Not a Number)
 // true => 1 ; false => 0

let isLoggedIn = "piyush"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "piyush" => true

let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)

// ***********Operations************
let value = 3
let negValue = -value
//console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1= "hello";
let str2= "piyush";

let str3= str1 + str2
 console.log(str3);

//console.log("1" + 2);  //priority given to datatype appearing first // Output is 12
//console.log(1 + "2");   // Output is 12
//console.log(1 + 2 + "2");  //Output is 32
//console.log("1" + 2 + 2);   //Output is 122
//console.log((3 + 4) * 5 % 3);

//console.log(+true);  //converts it to numeric type  ,Output is 1  //true+ will give syntax error
//console.log(+"");   //Output is 0

let num1,num2,num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;   //first update value and then use
gameCounter++;   //first use and then update
console.log(gameCounter);