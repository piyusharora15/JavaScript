const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map calls a defined callback function on each element of an array and returns an array that contains the results.
// const newNums = myNums.map( (num) => {return num + 10});

const newNums = myNums.map((num) => num * 10).map((num) => num + 1).filter( (num) => num >= 40);

// Chaining: whatever is the result of first operation is passed on the second operation.
console.log(newNums);