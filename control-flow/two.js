// 

const useremail = {}
if (useremail) {
    console.log("Got user emaoil");   
} else {
    console.log("Dont have email");
    
}

// FALSY VALUES 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// "0", 'false', " ", [], {}, function(){}


// false == 0
// false == ''
// 0 == ''

// if we compare both these three with each other then these will return **true 



// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("Object is empty");
    
// }


// *** Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 12
// val1 = null ?? undefined
val1 = undefined ?? null 

// console.log(val1);


// ****** Ternary Operator

// condition ? true : false 

const teaprice = 100
teaprice >= 80 ? console.log("greater than 80") : console.log("less than 80");

