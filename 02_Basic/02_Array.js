
const myCars = ["Aston martin","Lotus","BMW"]
const myCars2 = ["Porsche","Mercedes Benz","McLaren"]

// myCars.push(myCars2);
// console.log(myCars[3][2]);

// const spec_cars = myCars.concat(myCars2)
// console.log(spec_cars);

// Spread operator------------------------------------------------

// const spec_cars_new = [...myCars,...myCars2]
// console.log(spec_cars_new);
 
const anotherArr = [1,2,3, [4,5,6,], 7, [6,7,[4,5]]]
const real_Arr = anotherArr.flat(Infinity)
console.log(real_Arr);

console.log(Array.isArray('Prashant'));  // ques is that Array (False)
console.log(Array.from('Prashant'));     // Convert Array using given Data

let Score1 = 100
let Score2 = 200
let Score3 = 300

console.log(Array.of(Score1,Score2,Score3));
