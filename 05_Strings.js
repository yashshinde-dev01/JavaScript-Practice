const name='hitesh'
console.log(`hello my name is ${name}`)

const  newGame=new String("Pubg-game")
console.log(newGame)

console.log(newGame[1]);
console.log(newGame.__proto__)

console.log(newGame.length);
console.log(newGame.toUpperCase());
console.log(newGame.charAt(3));

console.log(newGame.indexOf('b'));

const newString=newGame.substring(0,5)
console.log(newString);

const anotherString=newGame.slice(-7,4)
console.log(anotherString);

const newStr1="  hitesh  sir  is legend"
console.log(newStr1);
console.log(newStr1.split());
console.log(newStr1.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(newGame.split('-'));

console.log("  hi  ".trimEnd())

const eg="javascript"
console.log(eg.startsWith("j"));

console.log('hi'.concat("hello"))

console.log("ha".repeat(4))






