export function task3() {
    let A = [];
    A.length = 5;
    for (let i = 0; i < 5; i++) {
        A[i] = [];
        A[i].length = 5;
    }
    for (let i = 0; i < A.length; i++)
        for (let j = 0; j < A[i].length; j++)
            A[i][j] = "\"" + (Math.round(Math.random() * 5) + 5) + "\"";
    let strA = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let symbol = (j < 4) ? '\t' : '\n';
            strA += String(A[i][j]) + symbol;
        }
    }
    console.log(strA);
}
