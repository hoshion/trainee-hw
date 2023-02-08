export function fourth(){
    let str = "Hello world!";
    let count = 0;
    console.log(str.substr(-4, 4));
    console.log(str.slice(0, 6));
    console.log(str.slice(1, 7));
    console.log(str.slice(-6, -1));
    for (let i = 0; i < str.length; i++){
        if(str[i] == " "){
            count ++;
        }
    }
    count++;
    console.log("Numbers of words: " + count + "\n")
}