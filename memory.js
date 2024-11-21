// Stack(Primitive) , Heap (Non Primitive)
let myYoutubeName = "piyusharoradotcom"

let anotherName = myYoutubeName    //copy of myYoutubeName is created and assigned to anotherName
anotherName = "chaiaurcode"        // anotherName is updated but it is the copy value
console.log(myYoutubeName)         // original value remains intact as copy was created
console.log(anotherName)          // new value is displayed as it has been updated
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne     //reference of userOne is created
userTwo.email = "piyush@google.com"
console.log(userOne.email)       // updated value of userOne.email is displayed
console.log(userTwo.email)