const prompt = require("prompt-sync")();

function sixTask(){
    let zoo = ["Lion", "Bear", "Elephant", "Gorilla", "Fox", "Giraffe"];
    console.log("Який спосіб обираєте? 1 чи 2");
    let a = +prompt();
    console.log("Хочете ввести тваринку(0) чи вивести (1)?");
    let x = +prompt();
    console.log("Початок(0) чи кінець(1)?")
    let y = +prompt();
    if (a===1) {
        if (x === 0) {
            console.log("Яку тваринку хочете ввести ?");
            let animal = prompt();
            if (y === 0) {
                zoo.unshift(animal);
                console.log(zoo);
            } else if (y === 1) {
                zoo.push(animal);
                console.log(zoo);
            }
        } else if (x === 1) {
            if (y === 0) {
                console.log(zoo.shift());
                console.log(zoo);
            } else if (y === 1) {
                console.log(zoo.pop());
                console.log(zoo);
            }
        }
    }
    else if (a===2){
        if (x === 0) {
            console.log("Яку тваринку хочете ввести ?");
            let animal = prompt();
            if (y === 0) {
                zoo[0]= animal;
                zoo[1] = 'Lion';
                zoo[2] = 'Bear';
                zoo[3] = 'Elephant';
                zoo[4] = 'Gorilla';
                zoo[5] = 'Fox';
                zoo[6] = 'Giraffe';
                console.log(zoo);
            } else if (y === 1) {
                zoo[6] = animal;
                console.log(zoo);
            }
        } else if (x === 1) {
            if (y === 0) {
               console.log(zoo[0]);
                zoo[0] = 'Bear';
                zoo[1] = 'Elephant';
                zoo[2] = 'Gorilla';
                zoo[3] = 'Fox';
                zoo[4] = 'Giraffe';
                console.log(zoo);
            } else if (y === 1) {
                console.log(zoo[5]);
                zoo.length = 5;
                console.log(zoo);
            }
        }
    }
}
sixTask();