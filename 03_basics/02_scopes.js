var c = 300;  
let a = 300;        // Global Scope
if(true){            // Block Scope
let a = 10;
const b = 20;
console.log("INNER: ",a);
var c = 30;// Whatever values are in BLock Scope should not go outside. This is the problem of using var.
}
//console.log(a);
//console.log(b);
//console.log(c);
// Global Scope is different if we run it in browser console and if we run it in a code environment using node.

function one(){           // In nested function, child function can access variables of parent function.
    const username = "Piyush";
    function two(){
        const website = "YouTube";
        console.log(username);
    }
    //console.log(website);    // Error: Outside of Scope, access not possible.
    two();
}
one();

if(true){
    const username = "Piyush";
    if(username === "Piyush"){
        const website = " YouTube";
        console.log(username + website);
    }
    //console.log(website);  // Error
}
//console.log(username);    // Error: Outside of if-block.

// ++++++++++++++ Interesting +++++++++++++++++
// Different ways to define function.
// Problem in Function Declaration.
console.log(addone(5));
function addone(num){
    return num + 1;
}

// Hoisting : Execution Context: Can't be accessed before declaration.
addTwo(5);   // Here problem occurs as this function is not accessible here.
const addTwo = function(num){
    return num + 2;
}
