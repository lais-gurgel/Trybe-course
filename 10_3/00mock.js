const randomNumber = () => Math.floor(Math.random() * 100);

const isDivisible = (number) => (randomNumber() % number) === 0;

test('isDivisible', () => {
  service.randomNumber = jest.fn();
  
});