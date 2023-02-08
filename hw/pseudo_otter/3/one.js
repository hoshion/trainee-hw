"use strict";

function one() {
  console.log( Math.floor(12.944523) );
  console.log( Math.ceil(3.18) );
  console.log( Math.round(9.58) );
  console.log( Math.trunc(22.23113) );
  console.log( +(35.213214).toFixed(4) );

  const round = (a) => {
    console.log( Math.floor(a) );
    console.log( Math.round(a) );
  };

  round(8.88);
}

export { one };
