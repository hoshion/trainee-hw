import create from 'prompt-sync';
const prompt = create();

let Zoo = ['Cat', 'Gepard', 'Leopard'];

export function sixth1() {
    let strategy = prompt("Input strategy of input of Zoo: ")
    if (strategy == "back") {
        while (true) {
            console.log(Zoo);
            let animal = prompt("Input your animal: ");
            Zoo[Zoo.length] = animal;
            let show = prompt("Do you want to show an element: ");
            if (show == "show last") {
                console.log(Zoo[Zoo.length - 1])
                break;
            }
            if (show == "show first") {
                console.log(Zoo[0])
                break;
            }
        }
    }
    if (strategy == "start") {
        while (true) {
            console.log(Zoo);
            let animal = prompt("Input your animal: ");
            plusStart(Zoo, animal)
            let show = prompt("Do you want to show an element: ");
            if (show == "show last") {
                console.log(Zoo[Zoo.length - 1])
                break;
            }
            if (show == "show first") {
                console.log(Zoo[0])
                break;
            }
        }
    }
}
export function sixth2() {
    let strategy = prompt("Input strategy of input of Zoo: ")
    if (strategy == "back") {
        while (true) {
            console.log(Zoo);
            let animal = prompt("Input your animal: ");
            Zoo.push(animal)
            let show = prompt("Do you want to show an element: ");
            if (show == "show last") {
                console.log(Zoo.pop())
                break;
            }
            if (show == "show first") {
                console.log(Zoo.shift())
                break;
            }
        }
    }
    if (strategy == "start") {
        while (true) {
            console.log(Zoo);
            let animal = prompt("Input your animal: ");
            plusStart(Zoo, animal)
            let show = prompt("Do you want to show an element: ");
            if (show == "last") {
                console.log(Zoo.pop())
                break;
            }
            if (show == "first") {
                console.log(Zoo.shift())
                break;
            }
        }
    }
}
function plusStart(zoo, animal) {
    zoo.length++;
    for (let i = zoo.length - 1; i >= 0; i--) {
        zoo[i] = zoo[i - 1];
    }
    zoo[0] = animal;
}