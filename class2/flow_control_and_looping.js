let a = 2;
if (a == 2) {
    console.log('test');
}

// switch

switch (3) {
    case 1:
        console.log("the value is 1");
        break;

    case 4:
        console.log("the value is 4");
        break;
    default:
        console.log("nothing matches!");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Function expression
var func = function functionTwo(a, b) {
    return a + " " + b;
}

// Arrow function
const functionTwo = (a, b) => {
    return a + " " + b;
}


// JavaScript Array

const cars = ['saab', 'Volvo', 'BMW'];
console.log(cars[2])
