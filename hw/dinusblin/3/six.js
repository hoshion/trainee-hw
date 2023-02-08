import create from 'prompt-sync';

const prompt = create();

export function task6() {
    let task = prompt("Яким способом ви хочете вирішуввати завдання? ")
    if (task === "without array methods") {
        task6_1()
    }
    if (task === "with array methods") {
        task6_2()
    }
}

function task6_1() {
    let zoo = ["tiger", `lion`, `monkey`, `fox`, `horse`];
    let res = [];
    while (true) {
        let act = prompt("Що ви хочете зробити? ");
        let position = prompt("Яку позицію тваринки ви хочете обрати? ");
        if (act === `show animal`) {
            if (position === `first`) {
                console.log("Початковий зоопарк ", zoo);
                let removedAnimal = zoo[0]
                console.log("Видалена тваринка " + removedAnimal)
                for (let i = 1; i < zoo.length; i++) {
                    res[i - 1] = zoo[i];
                }
                console.log("Змінений зоопарк ", res);
            }
            if (position === `last`) {
                console.log("Початковий зоопарк ", zoo);
                let removedAnimal = zoo[zoo.length - 1];
                console.log("Видалена тваинка " + removedAnimal);
                zoo.length--;
                console.log(zoo);
            }
        }
        if (act === `add animal`) {
            let add = prompt("Яку тваринку ви хочете додати? ");
            if (position === `first`) {
                console.log("Початковий зоопарк ", zoo);
                zoo.length++;
                for (let i = zoo.length - 1; i >= 0; i--) {
                    zoo[i] = zoo[i - 1];
                }
                zoo[0] = add;
                console.log("Змінений зоопарк ", zoo);
            }
            if (position === `last`) {
                console.log("Початковий зоопарк ", zoo);
                zoo[zoo.length] = add;
                console.log("Змінений зоопарк ", zoo);
            }
        }
        if (act === `stop` || position === `stop`) {
            break;
        }
    }
}

function task6_2() {
    let zoo = ["tiger", `lion`, `monkey`, `fox`, `horse`];
    while (true) {
        let act = prompt("Що ви хочете зробити? ");
        let position = prompt("Яку позицію тваринки ви хочете обрати? ");
        if (act === `show animal`) {
            if (position === `first`) {
                console.log("Початковий зоопарк ", zoo);
                console.log("Видалена тваринка ", zoo[0]);
                zoo.splice(0, 1);
                console.log("Змінений зоопарк ", zoo);
            }
            if (position === `last`) {
                console.log("Початковий зоопарк ", zoo);
                console.log("Видалена тваринка ", zoo.splice(zoo.length - 1));
                console.log("Змінений зоопарк ", zoo);
            }
        }
        if (act === `add animal`) {
            let add = prompt("Яку тваринку ви хочете додати? ");
            if (position === `first`) {
                console.log("Початковий зоопарк ", zoo);
                zoo.unshift(add);
                console.log("Змінений зоопарк ", zoo);
            }
            if (position === `last`) {
                console.log("Початковий зоопарк ", zoo);
                zoo.push(add);
                console.log("Змінений зоопарк ", zoo);
            }
        }
        if (act === `stop` || position === `stop`) {
            break;
        }
    }
}





