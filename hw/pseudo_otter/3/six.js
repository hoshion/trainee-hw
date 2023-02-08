"use strict";

import create from "prompt-sync";
const prompt = create();

const six = (arg) => arg();


function firstMethod() {
  let animals = [];

  while (true) {
    let animal = prompt("Enter an animal to add to the zoo: ");
    animals.push(animal);

    let continuation = prompt(
      "Do you want to view the first or the last animal in list? y/n "
    );
    if (continuation !== "y") continue;

    let positionOfAnimal = prompt("Which animal you want to view? first/last ");

    if (positionOfAnimal === "first") {
      console.log("The first animal in list:", animals.shift());
      break;
    } else if (positionOfAnimal === "last") {
      console.log("The last animal in list: ", animals.pop());
      break;
    } else console.log("You've typed wrong answer");
    break;
  }
}


function secondMethod() {
  let animals = [];

  let i = 0;

  while (true) {
    let animal = prompt("Enter an animal to add to the zoo: ");
    animals[i] = animal;

    let continuation = prompt(
      "Do you want to view the first or the last animal in list? y/n "
    );
    if (continuation !== "y") {
      i++;
      continue;
    }

    let positionOfAnimal = prompt("Which animal you want to view? first/last ");

    if (positionOfAnimal === "first") {
      console.log("The first animal in list:", animals[0]);
      break;
    } else if (positionOfAnimal === "last") {
      console.log("The last animal in list: ", animals[animals.length - 1]);
      break;
    } else console.log("You've typed wrong answer");
    break;
  }
}

export { six, firstMethod, secondMethod };
