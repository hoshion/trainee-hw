import create from 'prompt-sync';
const prompt = create();
export function one() {
    description();
    rounding();
}
function description() {
    console.log("Math.floor");
    console.log("Округлює число до меншого:", "3.2 ->", Math.floor(3.2));
    console.log("\nMath.ceil");
    console.log("Округлює число до більшого:", "3.2 ->", Math.ceil(3.2));
    console.log("\nMath.round");
    console.log("Округлює число до найближчого по десятковій частині:", "3.2 ->", Math.round(3.2));
    console.log("\nMath.trunc");
    console.log("Видаляє десяткову частину без округлення:", "3.2 ->", Math.trunc(3.2));
}
function rounding() {
    let num = +prompt("Введіть число для округлення: ");

    console.log("Округлення до меншого:", Math.floor(num));
    console.log("Округлення до найближчого:", Math.round(num));
}

