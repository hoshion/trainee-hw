
export function two(){
    function random(){
        return 5 + Math.random()*5;
    }
    for (let i = 0; i < 10; i++){
        console.log(random());
    }
}
