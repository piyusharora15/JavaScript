// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(typeof myDate);
let myCreatedDate = new Date(2025, 0, 25);  // (year,month,day)  months start from 0.
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());

let createdDate = new Date("2025-01-15");
console.log(createdDate.toLocaleString());

let newDate = new Date("01-20-2025");
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);  // Gives decimal values.

console.log(Math.floor(Date.now()/1000));

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM

console.log(myDate.toLocaleDateString()) //Output : 10/9/2023

console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z

console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

let newDate1 = new Date();
console.log(newDate1);
console.log(newDate1.getMonth() + 1);
console.log(newDate1.getDay());
newDate1.toLocaleString('default', {
    weekday: "long",
})
