//Singleton


// object literals 

// const mysym=Symbol("mysymbol");
// const Jsuser={
//     name:"hitesh",
//     "fullName":"Hitesh coudary",
//     [mysym]:"myKey1",
//     age:19,
//     location:"mumbai",
//     email:"hitesh@google.com",
//     isLoggedIn:false,
//     LastLoginDays:["Monday","Saturday"]
// }

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["fullName"]);
// console.log( Jsuser[mysym]);

// take a symbol and print in obkject above vv imp

// Jsuser.email="hiteshChouday@gpt.com"
// Object.freeze(Jsuser)
// Jsuser.email="hiteshChoudary@microsoft.com"
// console.log(Jsuser);

// Jsuser.greeting=function(){
//     console.log("hello js user");
// }
// Jsuser.greeting2=function(){
//     console.log(`hello js user,${this.name}`);
// }
// console.log(Jsuser.greeting());
// console.log(Jsuser.greeting2());

//++++++++++++++++++++part -2++++++++++++++++++

// const tinderUser=new Object();// singleton object hai

// const tinderuser={}// non-sigleton object hai

// tinderuser.id="abc123"
// tinderuser.name="suny"
// tinderuser.isLoggedIn=false;

// // console.log(tinderUser);

// const regularuser={
//     email:"Some@user.com",
//     fullName:{
//         userFullname:{
//             firstName:"Hitesh",
//             LastName:"choudary"
//         }
//     }
// }
// // console.log(regularuser.fullName.userFullname.firstName);

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// // const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)//{} is optional

// // or

// // const obj4={...obj1,...obj2}
// // console.log(obj4);

// // Array of object 

// const user=[
//     {
//         id:1,
//         email:"h@gmail.com"
//     },
//     {
//         id:2,
//         email:"h@gmail.com"
//     }
// ]
// user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


// ++++++++++++++++++Part 3++++++++++++++++

const course={
    courseName:"Js in hindi",
    price:"999",
    CourseInstructor:"hitesh"
}
// course.CourseInstructor

//or==>destructuring of object 

const{CourseInstructor:instuctor}=course

console.log(instuctor);//hitesh


// json format==>like object format 
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"

// }

// json format 2==>array of object like syntax 

// [
//     {},
//     {},
//     {}
// ]

