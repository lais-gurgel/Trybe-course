// Without rest parameter 
function fun(a, b){ 
  return a + b; 
} 
console.log(fun(1, 2)); // 3 
console.log(fun(1, 2, 3, 4, 5)); // 3      

// es6 rest parameter 
function fun(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15     

// rest parameter
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.