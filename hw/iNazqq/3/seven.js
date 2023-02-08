let now = new Date();

let day = now.getDate();
day = checkDate(day);
let month = now.getMonth() + 1;
month = checkDate(month);
let hours = now.getHours();
hours = checkDate(hours);
let minute = now.getMinutes();
minute = checkDate(minute)
let second = now.getSeconds();
second = checkDate(second);

function checkDate(date){
    if(date < 10){
        date = "0" + date;
        return date;
    }
    return date;
}



function seven() {
    console.log(`${day}.${month}.${now.getFullYear()} ${hours}:${minute}:${second}`);
}

module.exports = {seven};