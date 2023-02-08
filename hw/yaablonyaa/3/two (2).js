export function two() {
    for (let i = 0; i < 10; i++) {
        console.log(makeRandomNum());
    }
}
export function makeRandomNum() {
    return Math.random() * 5 + 5;
}
