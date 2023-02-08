
import create from 'prompt-sync';
const prompt = create();

export function one() {
    let num = 3.5478;

    let Rounding = {
        roundingDown: Math.floor(num),
        roundingUp: Math.ceil(num),
        roundingNext: Math.round(num),
        rounding: Math.trunc(3.5),
        roundingByDivision: (Math.round(num * 100) / 100),
        roundToFixed: (num.toFixed(2))
    };

    console.log(Rounding.roundingDown, Rounding.roundingUp, Rounding.roundingNext,
        Rounding.rounding, Rounding.roundingByDivision, Rounding.roundToFixed);

    function roundTwice() {
        let a = 15.82181;

        console.log(Math.ceil(a));
        console.log(Math.trunc(a));
    }

    roundTwice();
}