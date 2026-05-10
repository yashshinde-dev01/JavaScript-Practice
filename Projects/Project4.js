const randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber);


const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')

const guessSlot=document.querySelector('.guesses')
const lastresult=document.querySelector('.lastResult')

const lowOrhi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let PrevGuess=[]
let numGuess=1


let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        ValidateGuess(guess);
    })
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess<1){
        alert("please enter a number more than one")
    }else if(guess>100){
        alert("please enter a number less than  100")
    }else{
        PrevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displayMessage(`Game over.Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`yoy guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low `)
    }else if(guess>randomNumber){
        displayMessage(`Number is too  high`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrhi.innerHTML=`<h2>${message}</h2>`;

}
function newGame(){
    //
}
function endGame(){
    //
}
