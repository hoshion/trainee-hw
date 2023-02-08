export function four() {
    let str = 'Hello world!';
    console.log(str);
    let lastFour = str.substr(-4, 4);
    let firstSix = str.slice(0, 6);
    let from2to7 = str.slice(2, 8);
    let from1to5end = str.substr(-5, 5);

    console.log(lastFour);
    console.log(firstSix);
    console.log(from2to7);
    console.log(from1to5end);

    console.log("Кількість слів у рядку:", numOfWords(str));
}

function numOfWords(str) {
    let i = 0;
    let counter = 0;
    let num;
    // Пошук кількості слів за кількісті пробілів в рядку;
    while (num !== -1) {
        num = str.indexOf(' ', i);
        counter++;
        i = num + 1;
    }
    return counter;
}