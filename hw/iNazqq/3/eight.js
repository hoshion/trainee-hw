const prompt = require("prompt-sync")();

function eight() {

    let number = +prompt("Enter number:");
    let choice = +prompt("Enter choice(1, 2 or 3):");

    switch (choice) {
        case 1:
            eigth1(number);
            break;
        case 2:
            console.log(eigth2(number));
            break;
        case 3:
            eigth3(number);
            break;
        default:
            console.log("Error choice");
            break;
    }

    function eigth1(num) {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial = factorial * i;
        }
        console.log(factorial);
    }

    function eigth2(num) {
        if (num === 0) {
            return 0;
        }
        if (num === 1) {
            return 1;
        }
        return num * eigth2(num - 1);
    }

    function eigth3(num) {
        function factorial(num) {
           /* let fack = 1;
            for (let i = 2; i <= num; i++) {
                fack = fack * i;
            }
            console.log(fack);*/
            return function (){
                let fack = 1;
                for (let i = 2; i <= num; i++) {
                    fack = fack * i;
                }
                num++;
                console.log(fack);
                return fack;
            }
        }

        const fact = factorial(num);
        fact();

       /* const fact = factorial(3);
        fact();
        fact();
        fact();
                                        // виводить все, як у Свята
        const fact2 = factorial(5);
        fact2();
        fact2();
        fact();*/
    }
}

module.exports = {eight};
