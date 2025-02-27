// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE.
    console.log(`DB CONNECTED`);
})();
// Global Scope variables,declarations(pollution) creates problem, so we use IIFE to eliminate that.

//If no semicolon is added above, it gives error because the context of above function hasn't ended.
( (name) => {
    //Un-named IIFE.
    console.log(`DB CONNECTED TWO ${name}`);
} )('Piyush');