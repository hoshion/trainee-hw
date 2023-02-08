import create from "prompt-sync";

const prompt = create();

export function eight() {
    let number = Number(prompt('Введіть номер 8 завдання (від 1 до 3): '))

    function first() {
        let num = Number(prompt('Введіть число: '));

        function factorialWithLoop() {
            let result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
            }
            return result;
        }

        console.log(`Факторіал числа ${num}: ${factorialWithLoop()}`);
    }

    function second() {
        let num = Number(prompt('Введіть число: '));

        function factorialWithRecursion(n) {
            if (n === 0) {
                return 1;
            }
            return n * factorialWithRecursion(n - 1);
        }

        console.log(`Факторіал числа ${num}: ${factorialWithRecursion(num)}`);

    }

    function third() {
        function createFactorial(start) {
            let result = 1;
            let current = start;
            if (start > 2){
                for (let i = start - 1; i > 1; i--){
                    result *= i;
                }
            }
            return function() {
                result *= current;
                current++;
                return result;
            }
        }

        const fact = createFactorial(5);
        console.log(fact()); // 120
        console.log(fact()); // 720

        const fact2 = createFactorial(3);
        console.log(fact2()); // 6
        console.log(fact2()); // 24
        console.log(fact2()); // 120

        console.log(fact()); // 5040
    }

    if (number === 1) {
        first();
    } else if (number === 2) {
        second();
    } else if (number === 3) {
        third();
    } else {
        console.log('Такого варіанту немає!');
    }
}