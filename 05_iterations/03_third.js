// For-of Loop

const Arr = [1,2,3,4,5,]

for (const i of Arr) {
    // console.log(i);    
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    // console.log(`each chat is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of  America")
map.set('FR',"France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
    
}

const myobj = {
    game1 : "Nfs",
    game2 : "xSlingler"
}

