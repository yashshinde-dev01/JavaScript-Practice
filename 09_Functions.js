// functions in js 

const { use } = require("react");

// function sayMyName(){
//     console.log("my function");
// }
// // sayMyName()

// function addtwoNum(num1,num2){
//     console.log(num1+num2);
// }
// addtwoNum(2,3) 

// function loginUser(UserName="yash"){
//     if(UserName=== undefined){
//         console.log("please enter username");
//         return
//     }
//     return `${UserName} just logged in `
// }

// const take=loginUser()
// console.log(take);


//... called spread operator 
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(3,8,8,"hello"));

const user={
    userName:'Hitesh',
    price:233
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)
