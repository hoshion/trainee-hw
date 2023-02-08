import create from 'prompt-sync';
const prompt = create();
export function task6() {
    console.log('Оберіть варіант завдання (1/2):');
    let variant = prompt();
    if (variant == 1) {
        variant1();
    } else if (variant == 2){
        variant2();
    }
}
function variant1() {
    console.log('З використанням методів масивів:')
    let zoo = ['Lion', 'Hippo', 'Zebra', 'Deer'];
    console.log(zoo);
    console.log('Введіть тварину, яку хочете додати:')
    let animal = prompt()
    console.log('Куди ви хочете додати тваринку? (1 - початок / 2 - кінець)');
    let position = prompt();
    if (position == 1) {
        zoo.unshift(animal);
    } else if (position == 2) {
        zoo.push(animal);
    }
    console.log(zoo);
    console.log('Введіть звідки ви хочете вивести тваринку? (1 - початок / 2 - кінець):')
    let position2 = prompt();
    if (position2 == 1) {
        console.log(zoo.shift());
    } else if (position2 == 2) {
        console.log(zoo.pop());
    }
    console.log(zoo)
}
function variant2() {
    console.log('Без використання методів масивів:')
    let zoo = ['Lion', 'Hippo', 'Zebra', 'Deer'];
    console.log(zoo);
    console.log('Введіть тварину, яку хочете додати:')
    let animal = prompt();
    console.log('Куди ви хочете додати тваринку? (1 - початок / 2 - кінець)');
    let position = prompt();
    if (position == 1) {
        zoo = [animal, 'Lion', 'Hippo', 'Zebra', 'Deer'];
        console.log(zoo);
    } else if (position == 2) {
        zoo = ['Lion', 'Hippo', 'Zebra', 'Deer', animal];
        console.log(zoo);
    }
    console.log('Введіть звідки ви хочете вивести тваринку? (1 - початок / 2 - кінець):')
    let position2 = prompt();
    if (position2 == 1) {
        let first = zoo[0];
        console.log(first);
        for (let i = 1; i < zoo.length; i++) {
            zoo[i - 1] = zoo[i];
        }
        zoo.length--;
        console.log(zoo);
    }
    if (position2 == 2) {
        let last = zoo[4];
        console.log(last);
        delete zoo[4];
        zoo.length--;
        console.log(zoo);
    }
}