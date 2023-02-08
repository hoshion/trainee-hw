export function five() {
    let lit_arr = [1, 2, 3, 4, 5];
    console.log(`Масив, створений літералом: ${lit_arr}`);
    let class_arr = new Array(1, 2, 3, 4, 5);
    console.log(`Масив, створений класом: ${class_arr}`);
    let empty_arr = new Array(5);
    console.log(`Пустий масив: ${empty_arr}`);
}
