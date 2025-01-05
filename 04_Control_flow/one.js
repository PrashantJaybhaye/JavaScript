// if Statement
const isUserLoggedIn = true
const temperature = 25

// if (temperature < 50){
//     console.log(`${temperature} degree Temperature is less than 50 `);
// }else {
//     console.log("temperature is greater than 50");
// }

// const points = 200

// if (points > 100) {
//     const power = "fly"
//     console.log(`User Power ${power}`);
    
// }


// Short hand notation +++++++++++++++++++++++
// const balance = 1000

// // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("Less than");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("User Logged In");
}
