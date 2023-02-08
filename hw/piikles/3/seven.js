const prompt = require("prompt-sync")();

function sevenTask(){
    date = new Date();
    var month = date.getMonth()+1;
    newdate = date.getDate() + '.'
        + (month < 10 ? '0' : '') + month + '.'
        + date.getFullYear() + '\t' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() ;
    console.log(newdate);
}
sevenTask();