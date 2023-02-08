export function task4() {
    let helloWorld = "Hello world!";
    console.log("Останні 4 символи: " + helloWorld.slice(-4));
    console.log("Перші 6 символів: " + helloWorld.slice(0, 6));
    console.log("Символи від 2 до 7: " + helloWorld.slice(2, 7));
    console.log("Символи з 1 по 5 з кінця: " + helloWorld.slice(0, -5));
    console.log("Кількість слів у рядку: " + helloWorld.split(" ").length);
}