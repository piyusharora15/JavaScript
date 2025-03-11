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

//const newNums = myNums.filter( (num) => {
    // Here it is compulsory to use 'return' else it will display [].
  //  return num > 4
//})
// another way of doing the same thing.
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums); 

// We will these type of values from database.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];

let userBooks = books.filter( (bk) => bk.genre === 'History');

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"});
// whenever we declare scope {} , we need to use 'return' keyword, otherwise [] is printed.
console.log(userBooks);