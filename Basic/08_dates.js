// Dates

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,3,5,4)
let myCreatedDate = new Date("2025-01-04")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

// console.log(Date());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate() + 1);
console.log(newDate.getDay() + 1);

// console.log(`Month is ${newDate.getMonth() + 1} and the Date is ${newDate.getDate()+ 1}`);

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));