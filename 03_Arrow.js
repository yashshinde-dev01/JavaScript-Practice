//arrow funnction in js 

const user={
    userName:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.userName},welcome to website `);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
    // let userName="hitesh"
    // console.log(this.userName);
// }
// chai()


// const chai=function(){
//      let userName="hitesh"
//     console.log(this.userName);
// }
// chai()


//++++++++++++++++++Arrow Function++++++++++++++


const chai=()=>{
    let userName="Hitesh"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(9,6));


// implicit return


// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)

 const addTwo=(num1,num2)=>({userName:"Hitesh"})

console.log(addTwo(2,3));


// const myArr=[2,3,4,5]

// time --5:48:04




