//primitive 

// 7 types :String ,Number,boolean,null,undefined,Symbol,BigInt

//Reference type(Non-primitive)==>

//arrays,objects,functions

const score=100
// js is dynamically types
let userEmail=undefined
const id=Symbol('123')
const anotherId=Symbol('123')

const BigNumber=239492323234424n
console.log(id==anotherId)

const heros=["ironman","captain america"];
let myObj={// this is object
    name:"hitesh",
    age:22,
}
const myfunction=function(){
    console.log("hello meawww,ghp,ghp,ghp...")
}
console.log(typeof myfunction)//function
console.log(typeof BigNumber)//bigInt
console.log(typeof id)//Symbol
console.log(typeof userEmail)//undefined