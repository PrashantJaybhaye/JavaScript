

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2    
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")

const result = addTwoNumbers(3, 5)
// console.log("result:" , result);

function loginUserMessage(username = "ozork"){
    if(!username){
        console.log(`Please Enter a Username`);
        return
    }
    return `${username} Just logged In`
}

// console.log(loginUserMessage("Prashant"))
// console.log(loginUserMessage())

// ==============For Ecommerce-Website==================

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,240,521));

const user = {
    username: "Prashu",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    

}

// handleObject(user)
handleObject({
    username: "Pras",
    price: 185
})

const myNewArr = [200, 452, 255, 299]
function returnValue(OutArr){
    return OutArr[1]
}

console.log(returnValue(myNewArr));
console.log(returnValue([200,599,498,858]));
