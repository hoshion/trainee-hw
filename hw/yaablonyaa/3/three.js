import {makeRandomNum} from "./two.js";
export function three() {
    console.log(makeStrArr(makeArr()));
}
function makeArr() {
    let array = [];

    for (let i = 0; i < 5; i++) {
        let subArray = [];

        for (let j = 0; j < 5; j++) {
            subArray[j] = makeRandomNum().toFixed(2);
        }
        array[i] = subArray;
    }

    return array;
}
function makeStrArr(arr) {
    let strArr = '';

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (j < 4) {
                strArr += '"' + String(arr[i][j]) + '"' + '\t';
            } else {
                strArr += '"' + String(arr[i][j]) + '"' + '\n';
            }
        }
    }

    return strArr;
}
