
import create from 'prompt-sync';
const prompt = create();

export function four() {
    let hello = "Hello world!";
    let greeting = hello.split("");

    console.log("це 4 остані знаки: ");

    for (let i = greeting.length - 4; i < greeting.length; i++) {
        console.log(greeting[i]);
    }

    console.log("це перші 6 знаків:");

    for (let i = 0; i < 6; i++) {
        console.log(greeting[i]);
    }

    console.log("Це символи з 2 по 7:")
    for (let i = 1; i < 7; i++) {
        console.log(greeting[i]);
    }

    console.log("це перелік символів з останнього до 5 з кінця:");
    greeting.reverse();
    for (let i = 1; i < 5; i++) {
        console.log(greeting[i]);
    }
}

