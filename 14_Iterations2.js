// for each loopp


const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })


// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
    languageName:"js",
    LanguageFileName:"Javascript"
    },
    {
    languageName:"py",
    LanguageFileName:"python"
    },
    {
    languageName:"rb",
    LanguageFileName:"ruby"
    },
    {
    languageName:"java",
    LanguageFileName:"java"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})

const coding=['js','ruby','js','python','cpp']

const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})

// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((num)=> {
//     return num<6
// })
// console.log(newNums);

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num);
//     }
// })
// console.log(newNums);




const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums=myNumbers.map((num)=>{return num+10})
// console.log(newNums);


const newNums = myNumbers
    .map((num) => num * 10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)

console.log(newNums);  





//reduce method 

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// console.log(myTotal);



const myToatl=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myToatl);




const shoppinngCart=[
    {
        itemName:"js course",
        price:299     
    },
    {
        itemName:"java course",
        price:2995    
    },
    {
        itemName:"web dev course",
        price:2993     
    }
]

const pricetopay=shoppinngCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricetopay);


   
