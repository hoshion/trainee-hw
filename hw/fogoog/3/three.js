
export function three(){
    function random(){
        return (5 + Math.random()*5).toFixed(2);
    }

    let array = [];
    for (let i = 0;i < 5; i++){
        array[i] = [];
        for (let j = 0; j < 5; j++){
            array[i][j] = random();
        }
    }

    let arrayWithStrings = [];
    for (let i = 0; i < array.length; i++){
        arrayWithStrings.push("\""+ array[i].join("\"\t\"")+"\"");
    }
    console.log(arrayWithStrings.join("\n"));
}
