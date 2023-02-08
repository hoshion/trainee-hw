import create from 'prompt-sync';
const prompt = create();
 function task8() {
    console.log('Оберіть варіант завдання (1/2/3):');
    let variant = prompt();
    if (variant == 1) {
        variant1();
    } else if (variant == 2){
        variant2();
    } else if (variant == 3){
        variant3();
    }
}
function variant1() {
    console.log('Факторіал через цикл:')
    let num = +prompt('Введіть число, факторіал якого хочете знайти: ');
    function getFactorial(number) {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
    console.log(getFactorial(num))
}
function variant2() {
    console.log('Факторіал через рекурсію:')
    let num = +prompt('Введіть число, факторіал якого хочете знайти: ');
    function getFactorial2(number) {
        if (number == 0) {
            return 1;
        } else {
            return (number * getFactorial2(number - 1));
        }
    }
    console.log(getFactorial2(num));
}
function variant3() {
    console.log('Факторіал через замикання:')
    function getFactorial(number) {
        number = +prompt('Введіть число, факторіал якого хочете знайти: ');
        return function () {
            let factorial = 1;
            for (let i = 1; i <= number; i++) {
                factorial *= i;
            }
            return factorial;
        }
    }
    const result = getFactorial();
    console.log(result());
}
task8();