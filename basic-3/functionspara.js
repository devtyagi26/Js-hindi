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
console.log(loginuser("devashish"))
console.log(loginuser());
