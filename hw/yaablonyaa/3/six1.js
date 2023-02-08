import create from 'prompt-sync';
const prompt = create();

let zoo = ['Cat', 'Gepard', 'Leopard',];
export function six1() {
    console.log(zoo);

    let ask = prompt('Введіть "+" для додавання' +
        ' тваринки або "-" для вилучення: ');

    if (ask !== '') {
        if (ask === "+") {
            let animal = prompt("Введіть назву тваринки: ");
            plusAnimal(zoo, animal);
            six1();
        } else if (ask === "-") {
            minusAnimal(zoo);
            six1();
        }
    }
}
function plusAnimal(zoo, animal) {
    if (animal !== '') {
        let place = prompt('Введіть місце для додавання (begg or end): ');

        if ( place === 'begg') {
            zoo.length++;
            plusBegg(zoo, animal);
        } else if (place === 'end') {
            zoo[zoo.length] = animal;
        }
    }
}
function plusBegg(zoo, animal) {
    for (let i = zoo.length - 1; i >= 0; i--) {
        zoo[i] = zoo[i - 1];
    }
    zoo[0] = animal;
}
function minusAnimal(zoo) {
    let place = prompt('Введіть місце для вилучення (begg or end): ');

    if ( place === 'begg') {
        minusBegg(zoo);
    } else if ( place === 'end') {
        console.log(zoo.at(-1));
        zoo.length--;
    }
}
function minusBegg(zoo) {
    console.log(zoo[0]);

    for (let i = 0; i <= zoo.length - 1; i++) {
        zoo[i] = zoo[i + 1];
    }
    zoo.length--;
}
