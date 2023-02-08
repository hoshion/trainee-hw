export function task3(){
    let arr = [];
    for (let i = 0; i < 5; i++) {
        let part = [];
        for (let j = 0; j < 5; j++) {
            part[j] = (Math.random() * (10 - 5) + 5).toFixed(2);
        }
        arr[i] = part;
    }
    let res = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let str = (j < 4) ? "\t" : "\n";
            res += '"' + String(arr[i][j]) + '"' + str;
        }
    }
    console.log(res);
}

