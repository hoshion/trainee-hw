const prompt = require("prompt-sync")();

Math.round(10.49); // 10
Math.round(10.5); // 11
Math.round(10.51); // 11

Math.floor(10.49); // 10
Math.floor(10.5); // 10
Math.floor(10.51); // 10

Math.floor(-10.49); // -11
Math.floor(-10.5); // -11
Math.floor(-10.51); // -11

Math.ceil(10.49); // 11
Math.ceil(10.5); // 11
Math.ceil(10.51); // 11

Math.ceil(-10.49); // -10
Math.ceil(-10.5); // -10
Math.ceil(-10.51); // -10

Math.trunc(10.49); // 10
Math.trunc(10.5); // 10
Math.trunc(10.51); // 10

Math.trunc(-10.49); // -10
Math.trunc(-10.5); // -10
Math.trunc(-10.51); // -10

let one = 31.431231;
one.toFixed(1); // 31.4
one.toFixed(3); // 31.431




function rounding(){
    let choice;
    let number = +prompt("Number:");
    console.log("What is the rounding method?\n1 - up\n2 - down");
    choice = +prompt("Enter choice:");
    switch (choice){
        case 1:
            console.log(Math.ceil(number));
            break;
        case 2:
            console.log(Math.floor(number));
            break;
        default:
            console.log("Error choice");
            break;
    }
}

module.exports = {rounding};