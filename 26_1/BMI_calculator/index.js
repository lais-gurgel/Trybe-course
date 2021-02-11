const { questionFloat } = require('readline-sync');
const { calculateBMI } = require('./function');

console.log("Welcome to BMI Calculator");

const weight = questionFloat('Type your weight: ').toFixed(2);
const height = questionFloat('Type your height: ').toFixed(2);

calculateBMI(weight, height);
