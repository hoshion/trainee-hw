import create from 'prompt-sync';
const prompt = create();
export function task4() {
    let str = 'Hello world!'
    console.log(str.slice(8, 12)); // останні 4 символи
    console.log(str.slice(0, 6)); // перші 6 символів
    console.log(str.slice(2, 7)); // символи від 2 до 7
    console.log(str.slice(7, 12)); //  з 1 по 5 з кінця символи
    console.log('Кількість слів у речені:')
    console.log(str.trim().split(/\s+/).length);
}
