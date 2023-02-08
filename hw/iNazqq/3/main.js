const prompt = require("prompt-sync")();

let task1 = require('./one.js');
let task2 = require('./two.js');
let task3 = require('./three.js');
let task4 = require('./four.js');
let task5 = require('./five.js');
let task6 = require('./six.js');
let task7 = require('./seven.js');
let task8 = require('./eight.js');

while (1){
    let choice = +prompt("Select a task(1-8):");

    switch (choice){
        case 1:
            task1.rounding();
            break;
        case 2:
            task2.getRandom();
            break;
        case 3:
            task3.three();
            break;
        case 4:
            task4.choice();
            break;
        case 5:
            task5.choice();
            break;
        case 6:
            task6.six();
            break;
        case 7:
            task7.seven();
            break;
        case 8:
            task8.eight();
            break;
        default:
            console.log("Error choice");
            break;
    }
}
