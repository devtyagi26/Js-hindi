const name = "devashish"
const repocount = 10

// console.log(name + repocount + "Value"); like old version 

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('devgen')

console.log(gamename[0]);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('g'));

const newstring = gamename.substring(0,3)
console.log(newstring);

const anotherstring = gamename.slice(-6,3)
console.log(anotherstring);

console.log(gamename.replace('dev', 'ved'));

console.log(gamename.includes('ved'));
// if we convert any string into array, spaces or like any other

console.log(gamename.split('--'));
