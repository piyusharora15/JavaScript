// SIngleton
// Object.create

// Object Literals

// Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

//Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

//Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

const mySym = Symbol("key1");
const JsUser = {
    name : "Piyush",
    "full_name" : "Piyush Arora",  // No chance to acces this through . operator.
    [mySym] : "mykey1",
    age : 22,
    location : "Gurgaon",
    email : "piyush@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Tuesday", "Sunday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full_name"]);
console.log(JsUser[mySym]);
JsUser.email = "piyush@chatgpt.com";  // modifying values
Object.freeze(JsUser);  // freeze value of Object.
JsUser.email = "piyush@microsoft.com"; // no value propagated, without showing error, the value remains intact.
console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting);
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,$(this.name)`);
}
console.log(JsUser.greetingTwo);