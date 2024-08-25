// For-OFF

// const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num);
    
// }

// const greetings = "hello world"
// for (const greet of greetings){
//     console.log(`Each char is ${greet}`);
    
// }

// MAPS - it gets the unique value
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('fr',"France")
map.set('IN',"INDIA")

// console.log(map);

for(const [key,value] of map){
    // console.log(key, ':-', value);
    
}

//***************** */

const obj = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}
for(const key in obj){
    console.log(`${key} shortcut is for ${obj[key]}`);
    
}
const programming = ["js","rb","python"]
for(const key in programming){
    console.log(programming[key]);
    console.log(key);
}