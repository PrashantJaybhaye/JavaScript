const name = "Prashant"
const repoCount = 4

console.log(name + repoCount + " Total");
console.log(`My name is ${name} and my total repo count is ${repoCount}`);

const game = new String('prashttt-git')
console.log(game[3]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toUpperCase());
console.log(game.toLowerCase());

console.log(game.charAt(4));
console.log(game.indexOf('t'));

const newstring = game.substring(0,4)
console.log(newstring);

// trim or replace

const newStringOne = "   Prashant    "
console.log(newStringOne);
console.log(newStringOne.trim());   // Trim example


const url = "https://prashant.com/prash%20Jaybhaye"
console.log(url.replace("%20",'-'));     // Replace example
console.log(url.includes('prashant'))    // true exist


console.log(game.split('-'));
