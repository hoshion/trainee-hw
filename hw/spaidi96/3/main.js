import create from 'prompt-sync';
const prompt = create();
import {task1} from "./one.js";
import {task2} from "./two.js";
import {task3} from "./three.js";
import {task4} from "./four.js";
import {task5} from "./five.js";
import {task6} from "./six.js";
import {task7} from "./seven.js";
import {task8} from "./eight.js";
while(true) {
    let number = prompt('Оберіть номер завдання: ');
    let functionNumber = {
        '1': task1,
        '2': task2,
        '3': task3,
        '4': task4,
        '5': task5,
        '6': task6,
        '7': task7,
        '8': task8
    }
    functionNumber[number]();
    let end = prompt('Продовжити? (y/n) ')
    if (end == 'n') {
        break;
    }
}