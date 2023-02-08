const prompt = require("prompt-sync")();
function secondTask(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(secondTask(5,10));