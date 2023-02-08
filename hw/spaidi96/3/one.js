import create from 'prompt-sync';
const prompt = create();
export function task1() {
    task();
    console.log('Оберіть варіант завдання (1/2):');
    let variant = prompt();
    if (variant == 1) {
       variant1();
    } else if (variant == 2){
        variant2();
    }
}
function variant1 () {
    console.log('Перший спосіб округлення числа (помножити та розділити):')
    let num = 5.24951;
    console.log( Math.round(num * 100) / 100 ); // 5.25
}
function variant2() {
    console.log('Другий спосіб округлення числа (Метод toFixed(n)):')
    let num = 5.24951;
    console.log(num.toFixed(0)) // 5
    console.log(num.toFixed(1)) // 5.2
    console.log(num.toFixed(2)) // 5.25
    console.log(num.toFixed(3)) // 5.250
    console.log(num.toFixed(4)) // 5.2495
}
function task() {
    let num1 = 3.1;
    let num2 = -3.6;
    let num3 = 1.1;
    let num4 = -1.6;
    console.log('Функція Math.floor - округляє вниз');
    console.log(Math.floor(num1)); // 3
    console.log(Math.floor(num2)); // -4
    console.log(Math.floor(num3)); // 1
    console.log(Math.floor(num4)); // -2
    console.log('Функція Math.ceil - округляє вверх');
    console.log(Math.ceil(num1)); // 4
    console.log(Math.ceil(num2)); // -3
    console.log(Math.ceil(num3)); // 2
    console.log(Math.ceil(num4)); // -1
    console.log('Функція Math.round - округляє до найближчого цілого числа');
    console.log(Math.round(num1)); // 3
    console.log(Math.round(num2)); // -4
    console.log(Math.round(num3)); // 1
    console.log(Math.round(num4)); // -2
    console.log('Фунція Math.trunc - видаляє все після десяткової крапки без округлення');
    console.log(Math.trunc(num1)); // 3
    console.log(Math.trunc(num2)); // -3
    console.log(Math.trunc(num3)); // 1
    console.log(Math.trunc(num4)); // -1
}
