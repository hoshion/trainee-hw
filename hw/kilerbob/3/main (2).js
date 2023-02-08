import create from 'prompt-sync';
const prompt = create();

import {first} from "./one.js";
import {second} from "./two.js";
import {third} from "./three.js";
import {fourth} from "./four.js";
import {fifth} from "./five.js";
import {sixth1, sixth2} from "./six.js";
import {seventh} from "./seven.js";
import {eighth} from "./eight.js";

let ch = prompt("Choose task to check");

switch (ch){
    case "1":
        let num = +prompt("Input your number:");
        first(num)
        break
    case "2":
        second()
        break
    case "3":
        third()
        break
    case "4":
        fourth()
        break
    case "5":
        fifth()
        break
    case "6_1":
        sixth1()
        break
    case "6_2":
        sixth2()
        break
    case "7":
        seventh()
        break
    case "8":
        let nm = +prompt("Input your number:");
        eighth(nm);
        break
}