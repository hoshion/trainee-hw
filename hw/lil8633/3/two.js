export function task2() {
    let result = [];
    while (result.length < 10) {
        let randomNumbers = (Math.random() * 5) + 5;
        result.push(+randomNumbers.toFixed(2));
    }
    console.log(result);
}

