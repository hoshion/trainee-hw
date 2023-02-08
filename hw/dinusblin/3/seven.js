export function task7() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (day <= 9) {
        day = "0" + day;
    }
    if (month <= 9) {
        month = "0" + month;
    }
    if (hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    console.log(day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds);
}


