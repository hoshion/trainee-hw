import create from 'prompt-sync';
const prompt = create();

import {one} from './hw3/one.js';
import {two} from './hw3/two.js';
import {three} from './hw3/three.js';
import {four} from './hw3/four.js';
import {five} from './hw3/five.js';
import {six1} from './hw3/six1.js';
import {six2} from './hw3/six2.js';
import {seven} from './hw3/seven.js';
import {eight1} from './hw3/eight1.js';
import {eight2} from './hw3/eight2.js';
import {eight3} from './hw3/eight3.js'

ask();
function ask() {
    let task = prompt('Введіть номер завдання: ');
    let taskNum = {
        '1' : one,
        '2' : two,
        '3' : three,
        '4' : four,
        '5' : five,
        '6' : {
            '1' : six1,
            '2' : six2
            },
        '7' : seven,
        '8' : {
            '1' : eight1,
            '2' : eight2,
            '3' : eight3
        }
    }

    if (task !== '') {
        if (typeof taskNum[task] !== "object") {
            taskNum[task]();
            ask();
        } else {
            let variant = +prompt('Введіть номер варіанту: ');
            taskNum[task][variant]();
            ask();
        }
    }
}


