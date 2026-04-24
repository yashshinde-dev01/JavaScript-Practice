// for 

for(let i=0;i<11;i++){
    console.log(i);
}



// while loop
let i=0
while(i<=10){
    console.log(i);
    i++;
}


// do-while loop

// do{

// }while(condition);


//eg

let score=1;
do{
    console.log(score);
    score++;
}while(score<1);


// for of

// const arr=[1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }


// const grettings="hello worls!"

// for(const greet of grettings){
//     console.log(greet+" ");
// }

// Maps

const map=new Map()
map.set('In',"India")
map.set('usa',"America")
map.set('fr',"france")

// console.log(map);

for(const [key,value] of map){
    console.log(key ,":" ,value);
}

const myObj={
    game1:'NFS',
    game2:'sspiderman'
}

// for(const [key,value] of myObj){


const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is fot ${myObject[key]}`);
}

const programming=['js','rb','java','python']

for(const key in programming){
    console.log(programming[key]);
}

// const map=new Map();
// map.set('usa','america')
// map.set('in','india')
// map.set('af','africa')

// for(const key in map){
//     console.log(key);
// } // not possible becz mapp is not iterable


//     console.log(key,':',value);
// }



