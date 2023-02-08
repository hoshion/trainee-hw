import create from 'prompt-sync';

const prompt = create();

export function task8() {
    let variant = +prompt("Введіть варіант факторіала(1 - звичайний, 2 - рекурсія, 3 - замикання): ")
    let number = +prompt("Enter the number: ");
    if (variant === 1) {
        let result1 = 1;
        for (let i = 1; i <= number; i++) {
            result1 *= i;
        }
        console.log("Result: " + result1);
    }
    if (variant === 2) {
        factorial(number);

        function factorial(number) {
            if (number === 1) return 1;
            else return number * factorial(number - 1);
        }
    }

    function factorial3(number) {
        function factorial_3(number) {
            let result3 = 1;
            for (let i = 1; i <= number; i++) {
                result3 *= i;
            }
            return result3;
        }
        console.log(factorial_3(number));
    }

    if (variant === 3) {
    }
    factorial3(number);
}