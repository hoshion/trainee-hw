import create from 'prompt-sync';

const prompt = create();
import {one} from './one.js';
import {two} from './two.js';
import {three} from './three.js';
import {four} from './four.js';
import {five} from './five.js';
import {six} from './six.js';
import {seven} from './seven.js';
import {eight} from './eight.js';

let tasks = {
    '1': one,
    '2': two,
    '3': three,
    '4': four,
    '5': five,
    '6': six,
    '7': seven,
    '8': eight
};
let num = prompt('Введіть номер завдання (якщо бажаєте вийти - напишіть "s"): ');
while (num.toLowerCase() !== 's') {
    tasks[num]();
    num = prompt('Введіть номер завдання (якщо бажаєте вийти - напишіть "s"): ');
}
