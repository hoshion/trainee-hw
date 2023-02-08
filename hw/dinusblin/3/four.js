export function task4() {
    const str = "Hello world!";
    let a = str.slice(-4);
    let b = str.slice(0, 6);
    let c = str.slice(2, 7);
    let d = str.slice(0, -5);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(str.split(" ").length);
}
