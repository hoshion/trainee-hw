import create from 'prompt-sync';
const prompt = create();

export function task8() {
    let variant = prompt("Яким способом ви хочете реалізувати факторіал? ")
    if (variant==="First"){
        task8_1()
    }
    if (variant==="Second"){
        task8_2()
    }
    if (variant==="Third"){
        task8_3()
    }
}

function task8_1() {
    let num = +prompt("Введіть число ");
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    console.log("Факторіал цього числа ", res);
}


function task8_2() {
    let n = +prompt("Введіть число ");

    function factorial(n) {
        return n !== 1 ? n * factorial(n - 1) : 1;
    }

    console.log("Факторіал даного числа ", factorial(n));
}


function task8_3() {
    let num = +prompt("Введіть число ");
    factorial(num)
    function factorial(num){
        let res = 1;
        for (let i = 1; i <= num; i++) {
            res *= i;
        }
        return res;
    }
}

