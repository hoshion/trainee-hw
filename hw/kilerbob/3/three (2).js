export function third(){
    let matrix = [new Array(0), new Array(0), new Array(0), new Array(0), new Array(0)];
    for(let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            matrix[i].push('"' + (Math.random() * 5 + 5).toFixed(2) + '"    ');
            if (j == 4){
                matrix[i].push("\n")
            }
        }
    }
    console.log(matrix.toString());
}