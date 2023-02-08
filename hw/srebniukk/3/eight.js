import create from 'prompt-sync';
const prompt = create();

export function eight() {
    let func = prompt("Введіть номер варіанту: ")
    let num = prompt("Факторіал якого числа Ви хочете дізнатись? ");

    function factorialResFirst() {
        let res = 1;

        for (let i = 1; i <=num; i++) {
            res *= i;
        }

        console.log(res);
    }

    function factorialResSecond(num) {

        function factorialSecond(num) {

            if (num == 1) {
                return 1;
            } else {
                return num * factorialSecond(num - 1);
            }

        }
        console.log(factorialSecond(num));

    }

    function factorialResThird(num) {
        let res = 1;

        function factorialThird(Num, res) {
            return res * Num;
        }

        for (let i = 1; i <= num; i++) {
            res = factorialThird(i, res);
        }

        console.log(res);
    }


    let version = {
        "1": factorialResFirst,
        "2": factorialResSecond,
        "3": factorialResThird,
    }

    version[func](num);
}
