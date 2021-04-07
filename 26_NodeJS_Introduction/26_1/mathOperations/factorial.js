const inquirer = require('inquirer');

console.log("Welcome to factorial calculator");

function factorial (number){
  let j = 1;
  for(i=1;i<=number;i++){
    j = j*i;
  }
  return j;
};

inquirer
  .prompt([
    {
      type: "number",
      name: "numberInput", 
      message: "Type a number to factorial calculator: "
    }
  ])
  .then(answer => {
    console.log(factorial(answer.numberInput));
  })
  .catch(error => {
    console.error(error)
  });

