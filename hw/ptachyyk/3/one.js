export function one() {
    let a = 57.315;
    let b = 13.64;

    //Math.floor
    console.log(`Округлення числа ${a}: ${Math.floor(a)}`);
    console.log(`Округлення числа ${b}: ${Math.floor(b)}`);

    //Math.ceil
    console.log(`Округлення числа ${a}: ${Math.ceil(a)}`);
    console.log(`Округлення числа ${b}: ${Math.ceil(b)}`);

    //Math.round
    console.log(`Округлення числа ${a}: ${Math.round(a)}`);
    console.log(`Округлення числа ${b}: ${Math.round(b)}`);

    //Math.trunc
    console.log(`Округлення числа ${a}: ${Math.trunc(a)}`);
    console.log(`Округлення числа ${b}: ${Math.trunc(b)}`);

    //Math.toFixed
    console.log(`Округлення числа ${a}: ${a.toFixed()}`);
    console.log(`Округлення числа ${b}: ${b.toFixed()}`);
}