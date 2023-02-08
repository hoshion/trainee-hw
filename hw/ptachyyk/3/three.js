export function three() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 5; j++) {
            let number = Math.round((Math.random() * (10 - 5) + 5) * 100) / 100;
            row.push(number);
        }
        arr.push(row);
    }
    let str = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            str += "\"" + arr[i][j] + "\"\t";
        }
        str += "\n";
    }
    console.log(str);
}