"use strict";

function seven() {
  const date = new Date();

  const checkValue = (value) => {
    if (value < 10) {
      return "0" + value;
    }

    return value;
  };

  const day = checkValue(date.getDate());

  const month = checkValue(date.getMonth() + 1);

  const year = date.getFullYear();

  const hours = checkValue(date.getHours());

  const minutes = checkValue(date.getMinutes());

  const seconds = checkValue(date.getSeconds());

  const stringDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

  console.log(stringDate);
}

export { seven };