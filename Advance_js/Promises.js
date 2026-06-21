const promiseOne= new Promise(function(resolve,reject){
    //Do and async task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject('Error:Something went wrong')
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:"123"})
        }else{
            reject('Error:Js went wrong')
        }
    },2000)
})

// async await 

async function consumepromise5(){
    try{
        const response=await promise5
    console.log(response);
    }catch(err){
        console.log(err);
    }
}

consumepromise5()

//fetch

// async function getalluser(){
//     try{
//         const response= await fetch('https://api.github.com/users/PrathameshGurav250706')
//      const data= await response.json()
//      console.log(data)
//     }catch(err){
//         console.log("error");
//     }
// }
// getalluser()



fetch('https://api.github.com/users/PrathameshGurav250706').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log('error');
})
