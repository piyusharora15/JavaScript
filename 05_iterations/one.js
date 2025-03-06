for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
    }
    //console.log(element);
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j<=10;j++){
       // console.log(`Inner loop value ${j} and inner loop ${i}`); // Inner loop runs 10 times for each outer loop value.
       console.log(i + '*' + j + ' = ' + i*j); // Prints tables from 0 to 10.
    }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
} // If any index is accessed outside of array length, it gives undefined as output. In JavaScript, there's no ArrayOutOfBounds Exception.

// break and continue keywords.

// for (let index = 1; index <=20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`); 
// }   // break out of control flow.

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`); 
}  // just skip a particular iteration and rest of the iterations run as usual.

