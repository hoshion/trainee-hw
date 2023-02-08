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


while (true) {
    let task = prompt("Введіть номер завдання, яке ви хочете запустити ")
    if (task === `1`) {
        task1()
        continue;
    }
    if (task === `2`) {
        task2()
        continue;
    }
    if (task === `3`) {
        task3()
        continue;
    }
    if (task === `4`) {
        task4()
        continue;
    }
    if (task === `5`) {
        task5()
        continue;
    }
    if (task === `6`) {
        task6()
        continue;
    }
    if (task === `7`) {
        task7()
        continue;
    }
    if (task === `8`) {
        task8()
    }
    if (task === `stop`) {
        break;
    }
}