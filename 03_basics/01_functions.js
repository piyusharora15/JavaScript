function sayMyName(){
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
//sayMyName();
// function addTwoNumbers(number1,number2){  //passing parameters.
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,4);
// addTwoNumbers(3,'a');   // passing arguments.
// addTwoNumbers(3,null);

function addTwoNumbers(number1,number2){  //passing parameters.
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3,5);
console.log("Result: ",result);

function loginInUserMessage(username = "Sam"){
    if(username === undefined){   // or if(!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginInUserMessage("Piyush"));
console.log(loginInUserMessage());

function calculateCartPrice(val1, val2, ...num1){  // ... is called rest/spread operator based on their use-case.
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));  // here val1 takes 200, val2 takes 400 and rest 2 values are stored in array because of rest operator.

const user = {
    username: "Piyush",
    prices: 199  // type-checking is necessary in this condition of passing object in function.
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `); // displays price as undefined.
}
//handleObject(user);
handleObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray){  // passing array through function.
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 100]));