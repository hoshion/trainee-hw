import create from 'prompt-sync';
const prompt = create();


export function two() {
    let min = 5;
    let max = 10;

    for (let i = 0; i < 10; i++) {
        console.log(Math.random() * (max - min) + min);
    }
}

