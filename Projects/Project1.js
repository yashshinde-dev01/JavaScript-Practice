const buttons=document.querySelectorAll('.button')
const title=document.querySelector('h1')

const body=document.querySelector('body')

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){
            body.style.backgroundColor='grey'
            title.style.color="white";
        }
        if(e.target.id=='black'){
            body.style.backgroundColor='black'
            title.style.color="blue";
            
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor='blue'
            title.style.color="black";
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor='yellow'
            title.style.color="pink";
        }
    })
})