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