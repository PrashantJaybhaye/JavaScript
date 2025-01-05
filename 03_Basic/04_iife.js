// Immediately Invoked Function Expression (IIFE)

(function pizzu() {
    // named IIFE
    console.log(`DB CONNECTED`);
        
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )('Prashant')