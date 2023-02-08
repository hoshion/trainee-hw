export function first(num) {
    console.log(Math.floor(num))
    console.log(Math.round(num))
    console.log(Math.ceil(num))
    console.log(secVar(num));

    function secVar(n) {
        let end = n % 1;
        if (end < 0.5){
            return n - end;
        }
        else {
            return n - end + 1;
        }

    }
}