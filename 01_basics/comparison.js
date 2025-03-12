// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
// It is converted into numeric datatype so it gives output as true.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. That's why (3) null>=0 is true
// and (1) null>0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// In this case it gives output as false in all cases.

// Avoid these kind of comparisons as these are the inconsistencies in the language
// sometimes it converts into 0 and sometimes into NaN

// ===   It is used for strict checking
// It compares both value and the datatype

console.log("2" === 2);