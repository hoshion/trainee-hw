import create from 'prompt-sync';
const prompt = create();
export function six(){
    let option = prompt("Input option: ");
    function withoutMethods() {

        function push(array,value){
            array[array.length] = value;
        }
        function pop(array){
            console.log(array[array.length-1]);
            array.length--;
        }
        function shift(array){
            console.log(array[0]);
            for (let i = 0; i < array.length; i++) {
                array[i] = array[i + 1];
            }
            array.length--;
        }
        function unshift(array,value){
            for (let i = array.length - 1; i >= 0; i--) {
                array[i + 1] = array[i];
            }
            array[0] = value;
        }

        let animals = ["cat", "dog", "dear", "parrot"];
        while (true) {
            console.log(animals);
            let where = prompt("Input start/end/stop: ");
            if (where === "stop"){
                break;
            }
            let action = prompt("Input input/output/stop: ");

            if (action === "stop"){
                break;
            }
            if (action === "input") {
                let animal = prompt("Input new animal: ")
                if (where === "start") {
                    unshift(animals,animal);
                } else if (where === "end") {
                    push(animals,animal);
                } else {
                    console.log("Wrong value");
                }
            } else if (action === "output") {
                if (where === "start") {
                    shift(animals);
                } else if (where === "end") {
                    pop(animals)
                } else {
                    console.log("Wrong value");
                }
            } else {
                console.log("Wrong value");
            }
        }
    }

    function withMethods(){
        let animals = ["cat", "dog", "dear", "parrot"];
        while (true) {
            console.log(animals);
            let where = prompt("Input start/end/stop: ");
            if (where === "stop"){
                break;
            }
            let action = prompt("Input input/output/stop: ");

            if (action === "stop"){
                break;
            }
            if (action === "input") {
                let animal = prompt("Input new animal: ")
                if (where === "start") {
                    animals.unshift(animal);
                } else if (where === "end") {
                    animals.push(animal)
                } else {
                    console.log("Wrong value");
                }
            } else if (action === "output") {
                if (where === "start") {
                    console.log(animals.shift());
                } else if (where === "end") {
                    console.log(animals.pop());
                } else {
                    console.log("Wrong value");
                }
            } else {
                console.log("Wrong value");
            }
        }
    }
    let options = {
        1: withoutMethods,
        2: withMethods,
    }
    options[option]();
}
