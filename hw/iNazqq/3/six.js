const prompt = require("prompt-sync")();

let arr = [];
let choice, animal, index = 0;

function enterAnimal(choic){
    choice = +prompt("Input from the end or from the beginning? (From the end - 1. from the beginning - 2)");
    if(choic == 1) {
        switch (choice) {
            case 1:
                animal = prompt("Enter name:");
                arr.push(animal);
                break;
            case 2:
                animal = prompt("Enter name:");
                arr.unshift(animal);
                break;
        }
    }
    else if(choic == 2){
        switch (choice) {
            case 1:
                animal = prompt("Enter name:");
                arr[index] = animal;
                index++;
                break;
            case 2:
                animal = prompt("Enter name:");
                let arr1 = arr;
                arr[0] = animal;
                for(let i = 0; i < arr + 1; i++){
                    arr[i+1] = arr1[i];
                }
                index++;
                break;
        }
    }

}

function six() {
    choice = +prompt("Enter choice(1 - with array method, 2 - without array method:");

    switch (choice) {
        case 1:
            six1();
            break;
        case 2:
            six2();
            break;
        default:
            return;
    }

    function six1() {
        while (1) {
            choice = +prompt("Enter choice(1 - input, 2,3 - output):");

            switch (choice) {
                case 1:
                    enterAnimal(1);
                    break;
                case 2:
                    console.log("Deleted element:" + arr.shift());
                    break;
                case 3:
                    console.log("Deleted element:" + arr.pop());
                    break;
                default:
                    return;
            }
        }
    }

    function six2() {
        while (1) {
            choice = +prompt("Enter choice(1 - input, 2,3 - output):");

            switch (choice) {
                case 1:
                    enterAnimal(2);
                    break;
                case 2:
                    console.log(arr[arr.length - 1]);
                    arr.length--;
                    break;
                case 3:
                    console.log(arr[0]);
                    for (let i = 0; i < arr.length; i++) {
                        arr[i] = arr[i+1];
                    }
                    arr.length--;
                    break;
                default:
                    return;
            }
        }
    }
}

module.exports = {six};