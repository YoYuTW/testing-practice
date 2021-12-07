const analyzeArray = require('../script/analyzeArray');

test('normal situation', () => {
  expect(analyzeArray([5, 7, 19, 23, 30]))
    .toEqual({
      average: 16.8,
      min: 5,
      max: 30,
      length: 5
    });
});

test('with number but type is string', () => {
  expect(analyzeArray([5, "7", 19, 23, 30]))
    .toEqual({
      average: 16.8,
      min: 5,
      max: 30,
      length: 5
    });
});

test('with non-number object', () => {
  expect(analyzeArray([5, 7, 19, 23, 30, 'random str', undefined]))
    .toEqual({
      average: 16.8,
      min: 5,
      max: 30,
      length: 7
    })
})

test('ignore NaN', () => {
  expect(analyzeArray([5, 7, 19, 23, 30, NaN]))
    .toEqual({
      average: 16.8,
      min: 5,
      max: 30,
      length: 6
    })
});

test('with infinity', () => {
  expect(analyzeArray([5, 7, 19, 23, 30, Infinity]))
    .toEqual({
      average: Infinity,
      min: 5,
      max: Infinity,
      length: 6
    })
})