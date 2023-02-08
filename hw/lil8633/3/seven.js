export function currentDateAndTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    let todayDate = new Date();
    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth() + 1;
    let currentDay = todayDate.getDate();

    console.log(currentDay + "." + currentMonth + "." + currentYear + " " + hours + ":" + minutes + ":" + seconds);
}
