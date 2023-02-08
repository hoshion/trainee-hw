import create from 'prompt-sync';
const prompt = create();
export function eight2() {
    let num = +prompt('Введіть число: ');
    if (num !== 0) {
        console.log(`Рекурсія\n${num}! = ${recursion(num)}`);
        eight2();
    }
}
function recursion(num) {
    if (num === 1) {
        return num;
    }

    return num * recursion(num - 1);
}