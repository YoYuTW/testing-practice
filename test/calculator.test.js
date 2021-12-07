const calculator = require('../calculator');

test('add numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('add something', () => {
  expect(calculator.add(1.5, '2')).toBe(3.5);
});

test('subtrach numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divide numbers', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('divide by zero', () => {
  expect(calculator.divide(2, 0)).toBe(Infinity);
});

test('quotieon with float', () => {
  expect(calculator.divide(2, 3)).toBe(2/3);
});

test('multiply numbers', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

