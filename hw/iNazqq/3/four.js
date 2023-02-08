const prompt = require("prompt-sync")();

let str = "Hello world!";
let str_output = "";
let leng = str.length;
let count = 0;

function four1(){
    str_output = str.slice(-4);
    console.log(str_output);
}

function four2(){
    str_output = str.substring(0, 6);
    console.log(str_output);
}

function four3(){
    str_output = str.substring(2, 7);
    console.log(str_output);
}

function four4(){
    str_output = str.substring(5,1);
    console.log(str_output);
}

function four5(){
    for(let i = 0; i < leng; i++){
        if(str[i] == " "){
            count++;
        }
    }
    console.log("Number of words:", count+1);
}

function choice(){
    let choice = +prompt("Enter choice(1-5):");

    switch (choice){
        case 1:
            four1();
            break;
        case 2:
            four2();
            break;
        case 3:
            four3();
            break;
        case 4:
            four4();
            break;
        case 5:
            four5();
            break;
        default:
            console.log("Error choice");
            break;
    }
}

module.exports = {choice};

/*
function four1(){
    for(let i = leng - 4; i < leng; i++){
        str_output = str_output + str[i];
    }
    console.log(str_output);
    str_output = "";
}

function four2(){
    for(let i = 0; i < 6; i++){
        if(i > leng) break;
        str_output = str_output + str[i];
    }

    console.log(str_output);
    str_output = "";
}

function four3(){
    for(let i = 1; i < 7; i++){
        if(i > leng) break;
        str_output = str_output + str[i];
    }

    console.log(str_output);
    str_output = "";
}

function four4(){
    for(let i = leng - 5; i < leng; i++){
        if(i > leng) break;
        str_output = str_output + str[i];
    }

    console.log(str_output);
    str_output = "";
}


four1();
four2();
four3();
four4();*/
