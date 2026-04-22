//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`Db connceted `);
})();

((name)=>{
    console.log(`Db connected ${name}`);
})('hitesh')
