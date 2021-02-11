const inquirer = require('inquirer');
const { calculateBMI } = require('./function');

console.log("Welcome to BMI Calculator");

const isAValideNumber = (number) => {
  const regexp = /^\d+(\.\d{1,2})?$/;

  if (regexp.test(number)) {
      return true;
  }
  return false;
};
console.log(isAValideNumber(9999.99));
// / / : the beginning and end of the expression
// ^ : whatever follows should be at the beginning of the string you're testing
// \d+ : there should be at least one digit
// ( )? : this part is optional
// \. : here goes a dot
// \d{1,2} : there should be between one and two digits here
// $ : whatever precedes this should be at the end of the string you're testing

inquirer
  .prompt([
    { type: "number", 
      name: "weight",
      message: "What is your weight? "
    },
    { type: "number", 
      name: "height",
      message: "What is your height? "
    }
  ])
  .then(({weight, height}) => {
    const BMIAndNutritionalStatus = calculateBMI(weight, height);
    console.log("BMI: %s", BMIAndNutritionalStatus.BMI);
    console.log("Nutritional status: %s", BMIAndNutritionalStatus.nutritionalStatus);
  })
  .catch(error => console.error(error));
