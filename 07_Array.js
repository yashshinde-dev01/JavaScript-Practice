//Arrays

// const myarr=[0,2,3,4,5];

// const myHero=["captainAmerica","iron-man","superman"]

// const myarr2=new Array(1,2,3,4,5);
// console.log(myarr2[3]);


// ArrayMethods

const myarr=[1,2,3,4,5];
// myarr.push(6)// add at the end 
// // add at the end 
// myarr.push(7);
// myarr.pop()
// console.log(myarr);
// myarr.unshift(55);// add at first of the arrray 
// myarr.shift()// remove first element in an array
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));

// const newArr=myarr.join()
// console.log(myarr);
// console.log(typeof newArr);// string 

// slice , splice 

// console.log("A",myarr);

// const myn1=myarr.slice(1,3);
// console.log(myn1);
// console.log("B",myarr);

// const myn2=myarr.splice(1,3)//original array ko affect karata hai 
// console.log("C",myarr);
// console.log(myn2);

const marvel_hero=["iron man","captain america","spiderman"]
const dc_heroes=["superman","flash","batman"]


// marvel_hero.push(dc_heroes)
// console.log(marvel_hero );

const allheroes=marvel_hero.concat(dc_heroes)
console.log(allheroes);


// spread method ...(linke and glass spread)
const all_new_heroes=[...marvel_hero,...dc_heroes]
console.log(all_new_heroes);


const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=another_arr.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));// convert in array 
console.log(Array.from({name:"hitesh"}))// intersting 


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));








