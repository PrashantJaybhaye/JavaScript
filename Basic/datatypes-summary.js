// primitive data types

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const count = 50;
const countValue = 50.22;

const isLoggedIn = false;
const Outsidetemp = null;
let userEmail;

const id1 = Symbol('123')
const id2 = Symbol('123')

console.log(id1 === id2); // 0

const BigNumber = 4987654654784654n
console.log(typeof BigNumber); // Bigint

// Non-primitive

// Array, Objects, Functions

const Marvels = ["Ironman","Hulk","Thor","Capt.America"]

let myObj = {
    name: "Prashant",
    age: 22,
}

const myFunction = function(){
    console.log("Hello, World!");
    
}

// +++++++++++++++++++++++++++++++++++++++++++

let myNameIs = "PrashantJaybhaye"

let anotherName = myNameIs
anotherName = "Astra"

console.log(myNameIs);
console.log(anotherName);


let userOne = {
    email: "Xyz@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pqr@google.com"

console.log(userOne.email);
console.log(userTwo.email);
