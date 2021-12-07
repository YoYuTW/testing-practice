const reverseString = require('../script/reverseString');

test.skip('dummytest', () => {
  expect('ok').toBe('ok');
});

test('reverse a word', () => {
  expect(reverseString('uhcakip')).toBe('pikachu');
});

test('reverse a sentence', () => {
  expect(reverseString('Pu uoy evig annog reven')).toBe('Never gonna give you up');
});

test('reverse a paragraph', () => {
  expect(reverseString('Never gonna let you down, never gonna run around and desert you'))
    .toBe('Uoy tresed dna dnuora nur annog reven ,nwod uoy tel annog reven')
})