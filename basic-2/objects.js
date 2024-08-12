// objects literals

const mysymbol = Symbol("key1")

const user = {
    name: "Devashish",
    age: 18,
    [mysymbol]: "mykey1",
    location: "Jaipur",
    email: "dev@gmail.com",
    isLoggedIn: false,
    lastLogged: ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mysymbol]);

user.email = "dev@chatgpt.com"
// Object.freeze(user)
user.email = "dev@microsoft.com"
// console.log(user);


user.greeting = function(){
    console.log("Helloo JS");
    
}
user.greeting2 = function(){
    console.log(`Hello Js ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());
