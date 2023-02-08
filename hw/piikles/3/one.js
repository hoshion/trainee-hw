const prompt = require("prompt-sync")();
function firstTask() {

    let a = 3.1;
    let b = -2.1;
    let c = 4.6;
    let d = -1.6;

    //округлення вниз
    console.log(Math.floor(a)); //3
    console.log(Math.floor(b)); //-3
    console.log(Math.floor(c)); //4
    console.log(Math.floor(d)); //-2

    //округлення вгору
    console.log(Math.ceil(a)); //4
    console.log(Math.ceil(b)); //-2
    console.log(Math.ceil(c)); //5
    console.log(Math.ceil(d)); //-1

    //округлення математичне
    console.log(Math.round(a)); //3
    console.log(Math.round(b)); //-2
    console.log(Math.round(c)); //5
    console.log(Math.round(d)); //-2

    //видалення всього після десяткової крапки
    console.log(Math.trunc(a)); //3
    console.log(Math.trunc(b)); //-2
    console.log(Math.trunc(c)); //4
    console.log(Math.trunc(d)); //-1

    console.log("Хочете округлити число? Так(1) Ні(0)");
    const o = +prompt();
    if (o===1) {
        okruglennya();
    }
    function okruglennya(){
        console.log("Введіть число:");
        const e = +prompt();
        console.log("Введіть шлях: 1 або 2");
        const way = +prompt();
        if (way === 1){
            console.log(Math.floor(e));
        }
        else if (way === 2){
            console.log(Math.ceil(e));
        }
        else {
            console.log("Введіть 1 або 2");
        }
    }

}
firstTask();
