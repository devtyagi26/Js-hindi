// Array in javascript

// const arr = [0, 1, 2, 3, 4, 5]

// console.log(arr[1]);
const myHeros = ["shaktiman", "naagraj"]
// Shallow copy of an object is a copy whose properties share the same references 
// Deep copy do not share the same references

// Array methods

// arr.push(6)
// console.log(arr);

// arr.pop()

// arr.unshift(9)  // Add element
// arr.shift()     // Remove element


// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newarr = arr.join()
// console.log(arr);
// console.log(newarr);

// SLICE AND SPLICE METHODS

// console.log("A ", arr);

// const myn1 = arr.slice(1,3)
// console.log(myn1); 
// console.log("B ", arr);

// const myn2 = arr.splice(1,3)
// console.log("C ", arr);
// console.log(myn2);


// Array Part - 2

const fruits = ["Apple", "ogrange", "Mango"]
const city = ["Mathura", "ujjain", "Ayodhya"]

// fruits.push(city)
// console.log(fruits);

// const all = fruits.concat(city)
// console.log(all);

// const alls = [...fruits, ...city] // Easiest method spread method
// console.log(alls);

// const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real = another.flat()
// const real1 = another.flat(Infinity)
// console.log(real);
// console.log(real1);




console.log(Array.isArray("Devashish"));
console.log(Array.from("Devashish"));
console.log(Array.from({name: "Devashish"})); // insteresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
