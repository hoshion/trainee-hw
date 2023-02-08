"use strict";

function four() {
  const string = "Hello world!";

  console.log( string.slice(-4) );
  console.log( string.slice(0, 6) );
  console.log( string.slice(1, 7) );
  console.log( string.slice(-5) ); // всі символи брав включно

  const countWords = (string) => {
    let counter;

    if (string === "") return 0;
    else counter = 1;

    for (let char of string) {
      if (char === " ") counter += 1;
    }

    return counter;
  };

  console.log("The amount of words in the string: ", countWords(string));
}

export { four };