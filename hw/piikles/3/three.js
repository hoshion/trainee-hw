const prompt = require("prompt-sync")();
function threeTask(){
    var A = new Array();
    A.length = 5;

    for (var i = 0; i<5; i++){
        A[i]= new Array();
        A[i].length = 5;
    }
    for (var i = 0; i < A.length; i++)
        for (var j = 0; j < A[i].length; j++)
            A[i][j] =Math.round((5 + parseFloat(Math.random() * (10-5+1)))*100)/100;
    console.log(A);

    let cosmeticBag = "\"Косметичка\":\n  \"Тональний\"\t\"крем\"\n  \"Консилер\"\n  \"Туш\"";

    console.log(cosmeticBag);
}
threeTask();