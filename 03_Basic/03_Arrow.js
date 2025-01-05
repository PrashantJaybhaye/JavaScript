const user = {
    userName: "whitey",
    price: 9999,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.userName = "Prashant"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let userName = "Prashant"
//     console.log(this);
    
// }

// one()

// const ozork = function () {
//     let userName = "Prashant"
//     console.log(this);
// }

const ozork = () => {
    let userName = "Prashant"
    console.log(this);
}

// ozork()

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addtwo = (num1 , num2) => num1 + num2
// const addtwo = (num1 , num2) => (num1 + num2)
const addtwo = (num1 , num2) => ({userName: "Prashant"})

console.log(addtwo(5,4));
