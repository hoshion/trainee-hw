import create from 'prompt-sync';
const prompt = create();
export function task1() {
    let num1 = 2.1234;
    let num2 = 2.6789;
    let num3 = -2.1234;
    let num4 = -2.6789;
    console.log("Початкові числа: ", num1, num2, num3, num4);
    console.log("Округлення через Math.floor ", Math.floor(num1), Math.floor(num2), Math.floor(num3), Math.floor(num4));
    console.log("Округлення через Math.ceil ", Math.ceil(num1), Math.ceil(num2), Math.ceil(num3), Math.ceil(num4));
    console.log("Округлення через Math.round ", Math.round(num1), Math.round(num2), Math.round(num3), Math.round(num4));
    console.log("Округлення через Math.trunc ", Math.trunc(num1), Math.trunc(num2), Math.trunc(num3), Math.trunc(num4));
    console.log("Округлення через множення та ділення ", Math.round(num1 * 100) / 100, Math.round(100 * num2) / 100,
        Math.round(num3 * 100) / 100, Math.round(num4 * 100) / 100);
    console.log("Округлення через toFixed ", +num1.toFixed(2), +num2.toFixed(2), +num3.toFixed(2),
        +num4.toFixed(2));
    let num = +prompt("Введіть число ");
    console.log("Початкове число ", num);
    console.log("Округлення через Math.floor ", Math.floor(num));
    console.log("Округлення через Math.round ", Math.round(num));
}
