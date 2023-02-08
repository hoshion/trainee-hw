import create from 'prompt-sync';
const prompt = create();
export function eight(){
    let option = prompt("Input option: ");
    let number = +prompt("Input number: ");
    function cycle(number){
        if (number === 0){
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= number; i++){
            result *= i;
        }
        return result;
    }
    function recursion(number){
        if(number === 0 || number === 1){
            return 1;
        }
        return number * recursion(number-1);
    }

    function closure(number){
        let result = 1;
        let i;
        for (i = 1; i < number; i++){
            result *= i;
        }
        return function (){
            return result *= i++;
        }
    }
    let options = {
        1: cycle,
        2: recursion,
        3: function (number){
            let inClosure = closure(number)
            return inClosure()

        }
    }
    console.log(options[option](number));
}

