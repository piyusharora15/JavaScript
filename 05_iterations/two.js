let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myArray = ['flash', 'batman', "superman"];
let arr = 0;
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

let score = 1;
// If score = 11, we get Output as Score is 11.
// do-while is a exit control loop, means it executes atleast once before checking the condition. Here since the condition  mismatches so only one time the execution happens.
do{
    console.log(`Score is ${score}`);
    score++;
} while(score <= 10);