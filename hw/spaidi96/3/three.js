 export function task3() {
    let matrix = []
    let result = '';
    console.log(matrix);
    for (let i = 0; i < 5; i++) {
        matrix[i] = [];
        for (let j = 0; j < 5; j++) {
            matrix[i][j] = (randomNumber(5,10).toFixed(2))
            matrix[i][j] = '\"' + matrix[i][j] + '\"' + '\t';
            result += matrix[i][j] + '\t';
        }
        result += '\n';
    }
    console.log(result)
    function randomNumber(min, max) {
        return min + Math.random() * (max - min);
    }
}

