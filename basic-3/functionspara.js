function myname(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("A");
    
}
// myname()

function nos(n1,n2){
    console.log(n1 + n2);
    return n1 + n2        // line 19 will work by this return statement
}
// nos(5,"6")
// nos(4, "a")
// nos(3, null)
// nos("a", 5)
// const result = nos(10,10)
// console.log("Result: ", result); 


function loginuser(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuser("devashish"))
// console.log(loginuser());


function calculatecarprice(...num1){   // Here we use the REST operator
    return num1 
}
// console.log(calculatecarprice(2));
// console.log(calculatecarprice(200,300,400,666,300));

const user = {
    username: "devashish",
    price: 199
}
function handleobj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobj(user)

handleobj({
    username: "sam",
    price: 99
})

const myarray = [200,300,500,100]

function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myarray));
console.log(returnSecondValue([200,300,500,100]));
