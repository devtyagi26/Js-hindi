// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB  connected`);
   
})();
// ; this semicolon is important to use for execution of two's IIFE
//()() // In firts parenthesis we write the function definition and second we write for the execution call


((name) => {
    console.log(`DB CONNECTED ${name}`);
    
})('devashish')
