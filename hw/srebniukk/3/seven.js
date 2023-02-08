import create from 'prompt-sync';
const prompt = create();

export function seven() {
    let today = new Date();
    let year = today.getFullYear();

    let month = today.getMonth()+1;
    if (month < 10) {
        month = ("0" + month);
    }

    let day = today.getDate();
    if (day < 10) {
        month = ("0" + day);
    }

    let hours = today.getHours();
    if (hours < 10) {
        month = ("0" + hours);
    }

    let minutes = today.getMinutes();
    if (minutes < 10) {
        month = ("0" + minutes);
    }

    let seconds = today.getSeconds();
    if (seconds < 10) {
        month = ("0" + seconds);
    }

    console.log(day + "." + month + "." + month + " " + hours + ":" + minutes + ":" + seconds);

}