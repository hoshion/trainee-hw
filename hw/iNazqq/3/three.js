let array = [[5],[5],[5],[5],[5]];
let str = "";

function three() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            array[i][j] = (Math.random() * (10 - 5) + 5);
            array[i][j] = Math.round(array[i][j] * 100) / 100;
        }
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            str = str + "\"" + array[i][j] + "\"" + "\t";
        }
        str = str + "\n";
    }

    console.log(str);
}

module.exports = {three};