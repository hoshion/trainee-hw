import create from 'prompt-sync';
const prompt = create();
export function task7() {
    let date = new Date();
    let day = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let sec = date.getSeconds()
    if (day < 10) {
        day = (`0${day}`);
    }
    if (month < 10) {
        month = (`0${month}`);
    }
    if (hours < 10) {
        hours = (`0${hours}`); // сорі за сільйон if, хотів створити функцію, яка то все заміняє, але шось не вийшло :(
    }
    if (minutes < 10) {
        minutes = (`0${minutes}`)
    }
    if (sec < 10) {
        sec = (`0${sec}`)
    }
    console.log('Точний час:')
    console.log(`${day}.${month}.${year} ${hours}:${minutes}:${sec}`);
}



