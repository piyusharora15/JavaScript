var c = 300;  
let a = 300;        // Global Scope
if(true){            // Block Scope
let a = 10;
const b = 20;
console.log("INNER: ",a);
var c = 30;// Whatever values are in BLock Scope should not go outside. This is the problem of using var.
}
console.log(a);
//console.log(b);
//console.log(c);
// Global Scope is different if we run it in browser console and if we run it in a code environment using node.