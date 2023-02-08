import create from 'prompt-sync';
const prompt = create();

import {secondVariant} from "./eight.js"
export function thirdVariant() {
    let num = +prompt('Введіть число: ');
    if (num !== 0) {
        let result = makeFactorial(num);
        call(result)
        thirdVariant()
    }
}
function makeFactorial(num) {
    let factorial = secondVariant(--num);
    return function () {
        return factorial *= ++num;
    }
}
function call(result) {
    console.log(result());
    let rep = prompt('Бажаєте викликати функцію ще раз? (+ | -): ');
    if (rep === '+') {
        call(result);
    }
}

