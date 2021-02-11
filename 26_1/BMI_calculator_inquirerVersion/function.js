function getNutritionalStatus(BMI) {
  if (BMI < 18.5) {
    return "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    return "Normal weight";
  }
  if (BMI >= 25 && BMI < 30) {
    return "Overweight";
  }
  if (BMI >= 30 && BMI < 35) {
    return "Obese Class I";
  }
  if (BMI >= 35 && BMI < 40) {
    return "Obese Class II";
  }
  return "Obese Class III and IV"
};

function calculateBMI(weight, height) {
  const BMI = (weight / (Math.pow(height, 2))).toFixed(1);
  const nutritionalStatus = getNutritionalStatus(BMI);
  return { BMI, nutritionalStatus };
};

module.exports = {
  calculateBMI,
};
