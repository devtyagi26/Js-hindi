// this function = Refers the current context 

const user = {
    username: "devashish",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to the website`);
        // console.log(this);
        
    }
 }
// user.welcomemessage()
// user.username = "sam" // we can also change the name here
// user.welcomemessage()

// console.log(this);

// function chai(){
//     console.log(this){
// }
// chai()

// ARROW FUNCTION 
// const chai = () => {
//     let username = "devashish"
//     console.log(this);
    
// }
// chai()

// const addTwo =  (n1, n2) => {
//     return n1 + n2
// }  // Explicit arrow function

const add = (n1, n2) => (n1 + n2)  // Implicit arrow function
console.log(add(3,4));
