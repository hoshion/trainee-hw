const prompt = require("prompt-sync")();

function eightTask() {
    console.log("Введіть число:");
    let a = +prompt();

    //цикл
    function factorialize(num) {

        for(var result = 1; num > 1; num--){
            result = result * num;
            console.log(result);
        }
        return result;
    }
    factorialize(a);

    //рекурсія
    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    console.log(factorial(a));
}
eightTask();