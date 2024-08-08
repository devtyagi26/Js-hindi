// primitive datatype

// 7 types: String, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreval = 100.3

const isLoggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignum = 465378848748743448n


// Reference type (Non- primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "devashish",
    age: 22,
}

const myfun = function(){
    console.log("Hello world");
    
}
console.log(typeof bignum);
console.log(typeof anotherid);
console.log(typeof heros);

