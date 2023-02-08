import create from "prompt-sync";

const prompt = create();

export function six() {
    let number = Number(prompt('Введіть номер 6 завдання (від 1 до 2): '));

    function zoo_without() {
        let zoo = ["lion", "tiger", "bear", "monkey", "elephant"];

        function removeFromArray(name) {
            let animal;
            if (name.toLowerCase() === 'first') {
                animal = zoo[0];
                for (let i = 0; i < zoo.length; i++) {
                    zoo[i] = zoo[i + 1];
                }
                zoo.length--;
                console.log(`Видалена тваринка: ${animal}`);
            } else if (name.toLowerCase() === 'last') {
                animal = zoo[zoo.length - 1];
                zoo.length--;
                console.log(`Видалена тваринка: ${animal}`);
            } else {
                console.log('Невідома команда!');
            }
        }

        function addToArray(name, command) {
            let animal;
            if (command.toLowerCase() === 'first') {
                zoo.length++;
                for (let i = zoo.length - 1; i > 0; i--) {
                    zoo[i] = zoo[i - 1];
                }
                zoo[0] = name;
                console.log(`Була додана тваринка: ${name}`);
            } else if (command.toLowerCase() === 'last') {
                zoo.length++;
                zoo[zoo.length - 1] = name;
                console.log(`Була додана тваринка: ${name}`);
            } else {
                console.log('Невідома команда!');
            }
        }

        console.log(`Тваринки в зоопарку: ${zoo}`);
        let re_add = prompt('Щоб додати тваринку введіть "add", щоб видалити тваринку, введіть "remove" (якщо' +
            ' бажаєте вийти - введіть "s"): ');
        while (re_add.toLowerCase() !== 's') {
            if (re_add.toLowerCase() === 'remove') {
                let add_ani = prompt('Щоб видалити тваринку з кінця масиву введіть "last", щоб видалити тваринку' +
                    ' з початку масиву введіть "first"(щоб вийти введіть "s"): ');
                if (add_ani.toLowerCase() === 's') {
                    break;
                } else {
                    removeFromArray(add_ani);
                }
            } else if (re_add.toLowerCase() === 'add') {
                let ani = prompt('Введіть ім\'я тваринки (щоб вийти введіть "s"): ');
                if (ani.toLowerCase() === 's') {
                    break;
                } else {
                    let comm = prompt('Якщо ви хочете додати тваринку в початок масиву введіть "first", щоб ' +
                        'додати тваринку в кінець масиву введіть "last" (щоб вийти введіть "s"): ');
                    if (comm.toLowerCase() === 's') {
                        break;
                    } else {
                        addToArray(ani, comm);
                    }
                }
            } else {
                console.log('Невідома команда!');
            }
        }
    }

    function zoo_with() {
        let zoo = ['giraffe', 'gorilla', 'flamingo', 'zebra', 'platypus', 'elephant'];

        function removeAnimal(command) {
            let animal;
            if (command.toLowerCase() === 'first') {
                animal = zoo[0];
                zoo.shift();
                console.log(`Видалена тваринка: ${animal}`);
            } else if (command.toLowerCase() === 'last') {
                animal = zoo[zoo.length - 1];
                zoo.pop();
                console.log(`Видалена тваринка: ${animal}`);
            } else {
                console.log('Невідома команда!');
            }
        }

        function addAnimal(name, command) {
            if (command.toLowerCase() === 'first') {
                zoo.unshift(name);
                console.log(`Була додана тваринка: ${name}`);
            } else if (command.toLowerCase() === 'last') {
                zoo.push(name);
                console.log(`Була додана тваринка: ${name}`);
            } else {
                console.log('Невідома команда!');
            }
        }

        console.log(`Тваринки в зоопарку: ${zoo}`);
        let re_add = prompt('Щоб додати тваринку введіть "add", щоб видалити тваринку, введіть "remove" (якщо' +
            ' бажаєте вийти - введіть "s"): ');
        while (re_add.toLowerCase() !== 's') {
            if (re_add.toLowerCase() === 'remove') {
                let add_ani = prompt('Щоб видалити тваринку з кінця масиву введіть "last", щоб видалити тваринку' +
                    ' з початку масиву введіть "first"(щоб вийти введіть "s"): ');
                if (add_ani.toLowerCase() === 's') {
                    break;
                } else {
                    removeAnimal(add_ani);
                }
            } else if (re_add.toLowerCase() === 'add') {
                let ani = prompt('Введіть ім\'я тваринки (щоб вийти введіть "s"): ');
                if (ani.toLowerCase() === 's') {
                    break;
                } else {
                    let comm = prompt('Якщо ви хочете додати тваринку в початок масиву введіть "first", щоб ' +
                        'додати тваринку в кінець масиву введіть "last" (щоб вийти введіть "s"): ');
                    if (comm.toLowerCase() === 's') {
                        break;
                    } else {
                        addAnimal(ani, comm);
                    }
                }
            } else {
                console.log('Невідома команда!');
            }
        }

    }

    if (number === 1) {
        zoo_without();
    } else if (number === 2) {
        zoo_with();
    } else {
        console.log('Такого варіанту немає!');
    }
}