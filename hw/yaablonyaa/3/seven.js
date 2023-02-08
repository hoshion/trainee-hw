export function seven() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = String(date.getFullYear());
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(checkDec(day) + '.' + checkDec(month) + '.' + year+' ' +
        checkDec(hours) + ':' + checkDec(minutes) + ':' + checkDec(seconds));
}
function checkDec(num) {
    if (num >= 10) {
        return String(num);
    }

    return '0' + String(num);
}
