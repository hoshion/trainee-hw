"use strict";

function three() {
  const random = (min, max) => {
    const rand = (min - 0.5 + Math.random() * (max - min + 1)) * 100;
    return Math.round(rand) / 100;
  };

  let matrix = [];

  for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = random(5, 10);
    }
  }

  let resultRow = "";

  for (let i = 0; i < 5; i++) {
    for (let element of matrix[i]) {
      resultRow += '\"' + element + '\"' + "\t";
    }
    resultRow += "\n";
  }
  console.log(resultRow);
}

export { three };
