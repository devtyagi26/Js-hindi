let a = 100
const b = 200
var c = 300
if(true){
    let a = 10
    const b =20
    // console.log("INNER: ", a);
    
} // represents the scope of any function and any statement

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "devashish"

    function two(){
        const website = "github"
        // console.log(username);
    }
    //console.log(website);
    
    two()
}
//one()


if(true){
    const username = "devashish"
    if(username === "devashish"){
        const website = " github"
        // console.log(username + website);
        
    }
  //  console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++ interesting +++++++

// console.log(addone(5))
function addone(num){
    return num + 1
}



console.log(addtwo(5));
const addtwo = function(num){   // Also called expression 
    return num + 2
}

