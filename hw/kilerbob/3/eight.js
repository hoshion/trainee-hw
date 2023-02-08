import create from 'prompt-sync';
const prompt = create();
import {thirdVariant} from "./thirdVariant.js"
export function eighth(num) {
    console.log(firstVariant(num))
    console.log(secondVariant(num))
    console.log(thirdVariant(num))
}

function firstVariant(num) {
    for (let i = num - 1; i !== 0; i--) {
        num *= i;
    }
    return num;
}

export function secondVariant(num) {
    if (num == 1) {
        return num;
    }
    {
        return num * secondVariant(num - 1);
    }
}