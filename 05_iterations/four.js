const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for-in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
   // console.log(key);  // It displays 0,1,2,3,4  It displays keys(index) of array where it starts from zero.
    console.log(programming[key]);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");

// for (const key in map) {
//     console.log(key);
// } 
// This map is not iterable, it doesn't display anything.
