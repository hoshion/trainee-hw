import create from 'prompt-sync';
const prompt = create();

let counter = 0;
export function eight3() {
    let num = +prompt('Введіть число: ');
    let result = factorial(num);
    return result();
}
function factorial(num) {
    function makeFactorial() {
        if (num !== 0) {
            console.log(`Рекурсія\n${num}! = ${recursion(num + counter)}`);
            counter++;
            eight3();
        }
    }

    return makeFactorial;
}
function recursion(num) {
    if (num === 1) {
        return num;
    }

    return num * recursion(num - 1);
}

