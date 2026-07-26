// Immediately Invoked Function Expressions (IIFE)

// IIFE helps to avoid global scope pollution
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { // unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
