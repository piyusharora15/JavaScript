const user = {
    username: "Piyush",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);  // 'this' refers to current context.
        console.log(this);
    }
}
user.welcomeMessage();    // prints current context.
user.username = "Sam";   // context(value) is changed.
user.welcomeMessage();
console.log(this);  //Here it prints {} (empty object) because we are in node environment, we don't have any global context to refer.
// In browser environment global object is Window, so the above statement prints Window.

// function chai(){
//     let username = "Sakshi";
//     console.log(this.username); //Here it gives 'undefined' because 'this' can't be used to refer to any context inside a function.It can only be used inside objects.
// }
// chai();

// const chai = function(){
//     let username = "Sakshi";
//     console.log(this.username);
// }
// chai();

const chai = () => {     // Arrow Function.
    let username = "Sakshi";
    console.log(this.username);  // Same Output:'undefined'
    console.log(this);    // Output: {} (empty object).
}
chai();

const addTwo = (num1,num2) => {
    return num1 + num2;  //Explicit Return.
}
console.log(addTwo(3, 4));

const add = (num1,num2) => (num1 + num2);   //Implicit Return.
console.log(add(2,7));
// If we wrap values in {}, then we need to write return. If wrapped in (), no need to write return.

//const func = (num1,num2) => {username: "Sakshi"}; // It gives undefined as output.
//console.log(func(3,4));

const func = (num1,num2) => ({username: "Sakshi"}); // It gives username: Sakshi as output because to return object we need to wrap it in ().
console.log(func(3,4));