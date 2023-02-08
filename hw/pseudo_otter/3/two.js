"use strict";

const two = () => {
  const random = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
	};

  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
  console.log( random(5, 10) );
};

export { two };