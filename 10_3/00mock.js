const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const isDivisible = (number) => (randomNumber() % number) === 0;