"use strict";

import create from "prompt-sync";
const prompt = create();

const eight = (arg) => {
  const number = +prompt("Enter a number to find its factorial: ");

  if (arg === closureFactorial) {
    const closure = closureFactorial(number);
    return console.log( closure() );
  } 

  console.log(arg(number));
};


function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


function recursiveFactorial(n) {
  if (n == 1) {
    return n;
  } else return n * recursiveFactorial(n - 1);
}


function closureFactorial(n) {
  return () => {
    let result = 1;

    n++;

    for (let i = 1; i < n; i++) {
      result *= i;
    }
    return result;
  };
}


export { eight, factorial, recursiveFactorial, closureFactorial };