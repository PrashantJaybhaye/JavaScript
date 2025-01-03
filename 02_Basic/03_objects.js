// -----------------Object Literals-------------------

const mysym = Symbol("Key1")

const JsUser = {
    name: "Prashant",
    mysym: "myKey1",
    age: 18,
    location: "Navi-Mumbai",
    email: "prashan1837d@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "Prashant@chatgpt.com"
// Object.freeze(JsUser)    // Freeze function to avoid unwanted changes in object.
JsUser.email = "Prashant@meta.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JsUser, ${JsUser.name}`)
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
