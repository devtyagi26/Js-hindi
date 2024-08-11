// Array in javascript

const arr = [0, 1, 2, 3, 4, 5]

console.log(arr[1]);
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

console.log("A ", arr);

const myn1 = arr.slice(1,3)
console.log(myn1); 
console.log("B ", arr);

const myn2 = arr.splice(1,3)
console.log("C ", arr);
console.log(myn2);
