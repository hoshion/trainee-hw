import create from 'prompt-sync';

const prompt = create();
export function task6() {
    let zoo = ["mouse", `cow`, `dog`, `zebra`];
    console.log(zoo);
    let removed1 = zoo.splice(0, 1);
    let removed2 = zoo.splice(zoo.length - 1, 1);
    console.log("First element: " + removed1);
    console.log("Last element: " + removed2);
    console.log("New array: " + zoo);
}

export const task6_1 = () => {
    let zoo = ["mouse", "cow", "dog", "zebra"];
    console.log(zoo);
    let action = prompt("Звідки хочете видалити елемент(1- з початку, 2 - з кінця): ")
    if (action === "1") {
        let result = [];
        let removedElement = zoo[0]
        console.log("Removed element: " + removedElement)
        for (let i = 1; i < zoo.length; i++) {
            result[i - 1] = zoo[i];
        }
        console.log(result);
    }
    if (action === "2") {
        let zoo2 = ["mouse", "cow", "dog", "zebra"];
        let result = [];
        let removedElement = zoo2[zoo2.length - 1];
        console.log("Removed element: " + removedElement);
        result.length = zoo2.length - 1;
        for (let i = 1; i < zoo2.length; i++) {
            result[i - 1] = zoo2[i - 1];
        }
        console.log(result);
    }
};
