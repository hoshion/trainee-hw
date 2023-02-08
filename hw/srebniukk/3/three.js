import create from 'prompt-sync';
const prompt = create();

export function three() {
    let min = 5;
    let max = 10;
    let Matrics = [];
    let str = "";
    let check = 4;

    for (let i = 0; i < 5; i++) {
        Matrics[i] = [];

        for (let j = 0; j < 5; j++) {
            Matrics[i][j] = (Math.round((Math.random() * (max - min) + min) * 100) / 100);
        }

    }
    console.log(Matrics);
    str = Matrics.join( );
    str = str.split(",");

    for (let i = 0; i < str.length; i++) {

        if (i == check) {
            str[i] = "\'" + str[i] + "\'\n";
            check += 5;
        } else {
            str[i] = "\'" + str[i] + "\'\t";
        }

    }

    str = str.join("");

    console.log(str);
}