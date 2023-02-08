import create from 'prompt-sync';

const prompt = create();

export function task1() {
    let number1 = Number(prompt("Введіть додатнє число, яке хочете округлити"));
    let number2 = Number(prompt("Введіть відємне число, яке хочете округлити"));
    let floor1 = Math.floor(number1);
    let floor2 = Math.floor(number2);
    let round1 = Math.round(number1);
    let round2 = Math.round(number2);
    let ceil1 = Math.ceil(number1);
    let ceil2 = Math.ceil(number2);
    let trunc1 = Math.trunc(number1);
    let trunc2 = Math.trunc(number2);
    let toFixed1 = number1.toFixed(2);
    let toFixed2 = number2.toFixed(2);
    let divmod1 = Math.round(number1 * 100) / 100;
    let divmod2 = Math.round(number2 * 100) / 100;
    console.log("Math.floor :", floor1, floor2);
    console.log("Math.round ", round1, round2);
    console.log("Math.ceil ", ceil1, ceil2);
    console.log("Math.trunc ", trunc1, trunc2);
    console.log("toFixed ", toFixed1, toFixed2);
    console.log("div mod", divmod1, divmod2);
}