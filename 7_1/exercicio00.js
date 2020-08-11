// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/declare-a-read-only-variable-with-the-const-keyword

function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
