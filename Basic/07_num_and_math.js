const num = 400
// console.log(num);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // use in ecom website

const num1 = 25.4584
// console.log(num1.toPrecision(3));

const num2 = 100000000
// console.log(num2.toLocaleString()); // 100,000,000


// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4)); // 4 positive as it is negative changes to positive value
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // use abov value 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(5, 6, 2, 3)); // min value in array
console.log(Math.max(5, 6, 2, 3)); // max value in array

console.log(Math.random()); // always gives value between 0 to 1
console.log((Math.random()*10) + 1); 


const min = 10
const max = 25

console.log(Math.floor(Math.random()* (max - min + 1)) + min);








