import create from 'prompt-sync';
const prompt = create();
export function eight1() {
    let num = +prompt('Введіть число: ');
    let fac = 1

    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    console.log(`Цикл\n${num}! = ${fac}`);
}