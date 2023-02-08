import create from 'prompt-sync';
const prompt = create();

export function six() {
    let func = prompt("Введіть номер варіанту: ")
    let zoo = ['dog', 'cat', 'mouse', 'cow'];

    function first() {

        while (true) {
            let a = prompt("Додати тваринку, введіть +, якщо вивести тваринку, введіть - ");

            if (a == "+") {
                let animalsAdd = prompt("Введіть тваринку, яку хочете додати: ");
                let whereAdd = prompt("Додати на початок, введіть 'begin', додати в кінець, введіть 'end' ");

                if (whereAdd == "begin") {
                    zoo[0] = animalsAdd;

                } else if (whereAdd == "end") {
                    zoo[zoo.length] = animalsAdd;
                }

            } else if (a == "-") {
                let animalsDelete = prompt("Введіть тваринку, яку хочете видалити: ");
                let whereDelete = prompt("Видалити спочатку, введіть 'begin', видалити вкінці, введіть 'end' ");

                if (whereDelete == "begin"){
                    console.log(zoo[0]);
                    delete zoo[0];

                } else if (whereDelete == "end") {
                    console.log(delete zoo[zoo.length - 1]);
                }

            } else if (a == "stop") break;

            console.log(zoo);
        }
    }

    function second() {

        while (true) {
            let a = prompt("Додати тваринку, введіть +, якщо вивести тваринку, введіть - ");

            if (a == "+") {
                let animalsAdd = prompt("Введіть тваринку, яку хочете додати: ");
                let whereAdd = prompt("Додати на початок, введіть 'begin', додати в кінець, введіть 'end' ");

                if (whereAdd == "begin") {
                    zoo.unshift(animalsAdd);

                } else if (whereAdd == "end") {
                    zoo.push(animalsAdd());
                }

            } else if (a == "-") {
                let animalsDelete = prompt("Введіть тваринку, яку хочете видалити: ");
                let whereDelete = prompt("Видалити спочатку, введіть 'begin', видалити вкінці, введіть 'end' ");

                if (whereDelete == "begin") {
                    console.log(zoo.shift());
                    delete zoo[0];

                } else if (whereDelete == "end") {
                    console.log(zoo.pop());
                }

            } else if (a == "stop") break;

            console.log(zoo);
        }
    }

    let version = {
        "1": first,
        "2": second,
    }

    version[func]();

}