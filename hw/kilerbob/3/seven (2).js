export function seventh(){
    let milisec = String(new Date(Date.now()));
    let day = +milisec.slice(8, 10);
    let year = milisec.slice(11, 15);
    let time = milisec.slice(16, 25)
    let month = milisec.slice(4, 7)
    let monList = {Jan : "1",
        Feb : "2",
        Mar : "3",
        Apr : "4",
        May : "5",
        Jun : "6",
        Jul : "7",
        Aug : "8",
        Sep : "9",
        Oct : "10",
        Nov : "11",
        Dec : "12"};
    console.log(checkDec(day) + "." + checkDec(monList[month]) + "." + year + " " + time)
}
function checkDec(num){
    if(num < 10){
        return  "0" + num;
    }
    else {
        return num;
    }
}
