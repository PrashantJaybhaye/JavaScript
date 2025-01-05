// ++++++++++++++++  for  +++++++++++++++++


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
        
    }
    //console.log(element);
    
}

// ---------- Nested For Loop ------------

for (let i = 0; i < 10; i++) {
       // console.log(`Outer Loop: ${i}`);

    for (let j = 0; j < 5; j++) {
        // console.log(`  => Inner Loop: ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}


let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// Break & Continue


// 1)Break

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
        
//     }
//     console.log(`value of i is ${i}`);
        
// }



// 2] Continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
        
}
