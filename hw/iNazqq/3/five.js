const prompt = require("prompt-sync")();

function five1(){
    let arr = [];
    arr.length = 5;
    console.log("Array created by literal");
}

function five2(){
    let arr = new Array(5);
    console.log("An array is created by a class");
}

function choice(){
    let choice = +prompt("Enter choice(1 or 2):");

    if(choice === 1){
        five1();
    }
    else if(choice === 2){
        five2();
    }
    else{
        console.log("Error choice");
    }
}

module.exports = {choice};