// // scopes in js 

// // let a=10;
// // const b=20;
// // var c=90;

// let a=300;
// const b=334;
// if(true){
//     // var c=89;
//     let a=20;
//     const b=39;
// }
// console.log(a);
// console.log(b);
// // console.log(c);


// +++++++++++++Nested Scope+++++++++++++++++++

function one(){
    const  userName="hitesh"

    function two(){
        const website="youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()


// if(true){
//     const userName="Hitesh"
//     if(userName==="Hitesh"){
//         const website="youtube"
//         console.log(userName+website);
//     }
//     // console.log(website);
// }
// console.log(userName);



//++++++++++++Intresting+++++++++++++++++
console.log(addone(9));  // ok not problem 
function addone(num){
    return num+1
}

// addone(9)


// console.log(
// addtwo(5));  // shows error 
const addtwo=function(num){
    return num+2
}

// addtwo(5)
// console.log(
// addtwo(5));
