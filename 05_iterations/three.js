// for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
// for-of loop displays values.
const greetings = "Hello world!";
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");// map stores only unique values and in the order in which they are entered.
console.log(map);
// Map is iterable
for(const [key, value] of map){
    console.log(key, ':-', value);
}
// Object is not iterable
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }