export function two() {
    console.log('Випадкові числа від 5 до 10:');
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 5;
        console.log(randomNumber);
    }
}