// const userEmail = 'Prashant@hotmail.com'
const userEmail = []

if (userEmail) {
    console.log("Got user email"); 
}else {
    console.log("Don't have user email");
}

// FALSY VALUES =>
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES =>
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array id empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("obj is empty")
}

// nullish coalescing operator (??):null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("greater than 80");
