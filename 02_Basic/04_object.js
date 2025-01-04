// Singleton 

// const bumbleUser = new Object()    // Singleton
const bumbleUser = {}                 // Non-Singleton

bumbleUser.id = "214"
bumbleUser.name = "Prashant"
bumbleUser.email = "gwscary@gmail.com"
bumbleUser.isLoggedIn = false

// console.log(bumbleUser);

const RegularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prashant",
            Lastname: "jaybhaye"
        }
    }
}

// console.log(RegularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const Users = [
    {
        id: "1",
        email: "prashant@google.com"
    },
    {
        id: "2",
        email: "prashant@google.com"
    },
    {
        id: "3",
        email: "prashant@google.com"
    }
]

Users[1].email
console.log(bumbleUser);

console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));

console.log(bumbleUser.hasOwnProperty('isLoggedIn')); // Questioning true




