const prompt = require("prompt-sync")();
function fourTask(){
    let str = "Hello world";

    //останні 4 символи
    console.log(str.slice(7,11));

    //перші 6 символів
    console.log(str.slice(0,6));

    //символи від 2 до 7
    console.log(str.slice(2,8));

    //символи з 1 по 5 з кінця
    console.log(str.slice(-5,-1));

    //знайти кількість слів у рядку
    x=str.split(' ');
    console.log(x.length);
}
fourTask();