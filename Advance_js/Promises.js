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