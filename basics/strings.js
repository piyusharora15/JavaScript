const name = "piyush"
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo coumt is ${repoCount}`);  // Modern Way- String Interpolation

const gameName = new String('piyushpa');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString);  // doesn't support neg. values, ignores neg. value and starts from front.

const anotherString = gameName.slice(-8,4);
console.log(anotherString);   // prints from back in case of neg. value.

const newStringOne = "   piyush   ";
console.log(newStringOne);
console.log(newStringOne.trim());  // removes whitespace from both ends of string.

const url = "https://piyush.com/piyush%20arora";
console.log(url.replace('%20', '-')) ; // replaces characters in original string.

console.log(url.includes('sundar'));  // checks whether given string is present in original string.

console.log(url.split('%20'));
