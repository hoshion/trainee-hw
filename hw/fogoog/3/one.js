import create from 'prompt-sync';
const prompt = create();
export function one(){
    let number1 = 3.1;
    Math.floor(number1); //Округлює до меншного числа(-2.2 стане -3)
    Math.ceil(number1); //Округлює до більшого числа
    Math.round(number1);//Округлює до наближчого числа
    Math.trunc(number1);//Просто відкидає дробову частину
    number1.toFixed(2);//Не можно назвати таким же округленям як попередні, бо повертає строку; округляє до певного числа пілся кому ближчого числа

    let number2 = +prompt("Input number: ");

    console.log(Math.round(number2));
    console.log(number2.toFixed(0));
}
