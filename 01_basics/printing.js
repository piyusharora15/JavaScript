console.log("Hello Piyush");
process.stdout.write("Chai");    // It doesn't add a new line while printing

console.table({city: "Kolkata"});//prints the values in form of table.Helpful in printing objects.
console.warn({city:"Kolkata"});//It colorifies the text in Browser, giving a warning.

const accountId = 150403;
let accountEmail = "piyush@google.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;  // no value assigned to variable, so it prints "undefined" in the console.

//accountId = 2; // assignment to constant variable not allowed

accountEmail = "pa@google.com";
accountPassword = "45742";
accountCity = "Gurugram";

console.log(accountId);

/* Prefer not to use var
   because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);