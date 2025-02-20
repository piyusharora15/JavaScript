// const tinderUser = new Object(); //Singleton Object.
const tinderUser = {};    // Non-singleton object.
console.log(tinderUser); //no difference in output.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Piyush",
            lastname : "Arora"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname); //Accessing nested objects.


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
// const obj3 = { obj1, obj2};
//const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2, obj4);  // Better syntax, Use this.Both gives same Output.

const obj3 = {...obj1, ...obj2,...obj4}; // Using spread operator.90% of times this is used.
console.log(obj3);

const users = [          // an array of object.
    {
        id: 1,
        email: "pa@gmail.com"
    }
]
//console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Gives Output as an array which can easily be looped through.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // nested array as output.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));