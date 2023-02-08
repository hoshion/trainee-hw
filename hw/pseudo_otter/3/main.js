"use strict";

import create from "prompt-sync";
const prompt = create();

import { one } from "./tasks/one.js";
import { two } from "./tasks/two.js";
import { three } from "./tasks/three.js";
import { four } from "./tasks/four.js";
import { five } from "./tasks/five.js";
import { six, firstMethod, secondMethod } from "./tasks/six.js";
import { seven } from "./tasks/seven.js";
import {
  eight,
  factorial,
  recursiveFactorial,
  closureFactorial,
} from "./tasks/eight.js";

const tasks = [
  one,
  two,
  three,
  four,
  five,
  { 5: six, 1: firstMethod, 2: secondMethod },
  seven,
  { 7: eight, 1: factorial, 2: recursiveFactorial, 3: closureFactorial },
];

const task = +prompt("Enter the number of the task you want to execute: ") - 1;


if (task == 5 || task == 7) {
  const method = prompt("Enter the solution method of this task: ");

  const arg = tasks[task][method];
  tasks[task][task](arg);
} else {
  tasks[task]();
}
