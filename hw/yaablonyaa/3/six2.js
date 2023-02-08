import create from 'prompt-sync';
const prompt = create();

let zoo = ['Lizard', 'Owl', 'Bull',];
export function six2() {
    console.log(zoo);

    let ask = prompt('Введіть "+" для додавання' +
        ' тваринки або "-" для вилучення: ');

    if (ask !== '') {
        if (ask === "+") {
            let animal = prompt("Введіть назву тваринки: ");
            plusAnimal(zoo, animal);
            six2();
        } else if (ask === "-") {
            minusAnimal(zoo);
            six2();
        }
    }
}
function plusAnimal(zoo, animal) {
    if (animal !== '') {
        let place = prompt('Введіть місце для додавання (begg or end): ');

        if ( place === 'begg') {
            zoo.unshift(animal);
        } else if (place === 'end') {
            zoo.push(animal);
        }
    }
}
function minusAnimal(zoo) {
    let place = prompt('Введіть місце для вилучення (begg or end): ');

    if ( place === 'begg') {
        console.log(zoo[0]);
        zoo.shift();
    } else if ( place === 'end') {
        console.log(zoo.at(-1));
        zoo.pop();
    }
}