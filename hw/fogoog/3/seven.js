export function seven(){
    function addZero(number){
        if (number < 10){
            return "0"+number;
        }
        return number;
    }
    let date = new Date();

    let year = date.getFullYear();
    let month = addZero(date.getMonth()+1);
    let day = addZero(date.getDate());
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());
    console.log(day+"."+month+"."+year,hours + ":" + minutes + ":" + seconds);
}
