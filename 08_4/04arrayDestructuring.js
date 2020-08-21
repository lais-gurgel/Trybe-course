let a = 8, b = 6;
[a, b] = [b, a] // array destructuring
console.log(a,b) // 6, 8

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list 
  // arr = [3,4,5,6,7,8,9,10]
  return arr;
}
const arr = removeFirstTwo(source);
