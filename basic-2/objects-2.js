// const tinderuser = new Object() // singleton object

// const tinderuser = {} // Non-singleton object 

// tinderuser.id = "123abc"
// tinderuser.name = "Dev"
// tinderuser.isLoggedIn = false

// console.log(tinderuser);

// const regularuser = {
//     email: "dev@gmail.com",
//     fullname: {
//         userfullname: {
//             firtsname: "Devashish",
//             lastname: "Tyagi"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firtsname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj4);



// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn')); // it will check that this property is available or not 



// ************ Objects destructuring and JSON API****************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "devashish"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // declare as a instructor
console.log(instructor);


// {
//     // this is JSON look like an object
//     name: "devashish"
//     coursename: "js ij hindi"
//     price: "free"
// }

