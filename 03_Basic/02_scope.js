
let a = 300
if(true){    
    let a = 10
    const b = 20
    // var c = 30
    // console.log(`INNER: ${a}`)

}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Prashant"

    function two(){
        const Website = "Github"
        console.log(Website);
        console.log(userName);
        
    }
    // console.log(Website);

    two()
    
}

// one()

if (true) {
    const userName =  "Prashnt"
    if (userName === "Prashnt") {
        const Website = "Github.com"
        // console.log(userName +" "+ Website);
        
    }

}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num) {
    return + 1    
}

addOne(5)

const addTwo = function (num) {
    return + 2
}

addTwo(8)