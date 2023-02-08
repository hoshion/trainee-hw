import create from 'prompt-sync';

const prompt = create();

import { task1 } from "./one.js";
import { task2 } from "./two.js";
import { task3 } from "./three.js";
import { task4 } from "./four.js";
import { task5 } from "./five.js";
import { task6_1 } from "./six.js";
import { task6 } from "./six.js";
import { currentDateAndTime } from "./seven.js";
import { task8 } from "./eight.js";

while (true) {
    let task = prompt("Введіть номер таску, який ви хочете виконати або stop, якщо хочете припинити виконання програми: ")
    if (task === "stop") {
        break
    }
    if (task === "1") {
        console.log("Task 1");
        task1();
    }
    if (task === "2") {
        console.log("Task 2");
        task2();
    }

    if (task === "3") {
        console.log("Task 3");
        task3();
    }
    if (task === "4") {
        console.log("Task 4");
        task4();
    }
    if (task === "5") {
        console.log("Task 5");
        task5();
    }
    if (task === "6") {
        let zoo = ["mouse", `cow`, `dog`, `zebra`];
        console.log("Task 6");
        task6();
        task6_1();
    }
    if (task === "7") {
        console.log("Task 7");
        currentDateAndTime();
    }
    if (task === "8") {
        console.log("Task 8");
        task8();
    }
}
