export function four() {
    let str = 'Hello World!';
    console.log(`Для ${str}:`);
    console.log(`Останні 4 символи: ${str.slice(-4)}`);
    console.log(`Перші 6 символів: ${str.slice(0, 6)}`);
    console.log(`Символи від 2 до 7: ${str.slice(2, 8)}`);
    console.log(`Символи з 1 по 5 з кінця: ${str.slice(-5, -1)}`);
    console.log(`Кількість слів у рядку: ${str.split(" ").length}`);
}