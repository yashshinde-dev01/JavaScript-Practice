// bmi calculator
const form=document.querySelector('form')
// this use case will give empty values
// const weight=document.querySelector('#weight')

// const height=document.querySelector('#height')

// const result=document.querySelector('.result')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#result')

    if(height===''|| height<=0 || isNaN(height)){
        results.innerHTML=`please enter a valid number ${height}`
    }else if(weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML=`please enter a valid number weight  ${weight}`
    }else{
        const bmi=(weight / ((height*height)/10000)).toFixed(2)

        // show the result

        results.innerHTML=`<span>${bmi}</span>`

    if(bmi<18.6){
        results.innerHTML="Under weight";
    }else if(16.6<=bmi<=24.9){
        results.innerHTML="Normal range"
    }else{
        results.innerHTML="overweight"
    }
}
    
})


