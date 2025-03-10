// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);
// forEach loop does not return any value.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums); // prints [ 5, 6, 7, 8, 9, 10 ]
// filter returns the elements of an array that meet the condition specified in a callback function.

const newNums = myNums.filter( (num) => {
    // Here it is compulsory to use 'return' else it will display [].
    return num > 4
})
console.log(newNums); 