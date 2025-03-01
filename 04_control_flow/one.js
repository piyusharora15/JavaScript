const temperature = 40;

//if(temperature < 50){
if(temperature === 41){
    console.log("Less than 50");
}
else{
console.log("Temperature is greater than 50");
}
const score = 200;
if(score > 100){
     const power = "fly";
    // var power = "fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);  //Gives error as power variable is accessed outside of its scope.
// console.log(`User power: ${power}`); // var has global scope so its value can be accessed even outside of the scope.

const balance = 1000;
// if(balance > 500) console.log("test"), // shorthand notation.
// console.log("test2");  // Don't write this kind of code.

if(balance < 500){
    console.log("Less than 500");
}
else if(balance < 750){
    console.log("Less than 750");
}
else if(balance < 900){
    console.log("Less than 900");
}
else{
    console.log("Less than 1200");
}