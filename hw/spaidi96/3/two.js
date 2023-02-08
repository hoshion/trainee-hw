import create from 'prompt-sync';
const prompt = create();
export function task2() {
    function randomNumber(min, max) {
        return min + Math.random() * (max - min);
    }
    console.log('Випадкові числа від 5 до 10')
    let i = 0;
    while (i < 10) {
        console.log(randomNumber(5,10));
        i++;
    }
}
