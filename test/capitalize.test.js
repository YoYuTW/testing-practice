const capitalize = require('../script/capitalize');

test('works on a word', () => {
  expect(capitalize('pikachu')).toBe('Pikachu');
});

test('works on a sentence', () => {
  expect(capitalize('pika pika pi')).toBe('Pika pika pi');
});

test('works on symbols', () => {
  expect(capitalize('pika-pika chu~')).toBe('Pika-pika chu~');
});

test('works on a sentence beginning with symbols', () => {
  expect(capitalize('.not-a-pikachu')).toBe('.Not-a-pikachu');
});

test('works on another sentence beginning with symbols', () => {
  expect(capitalize('.3284not-a-pikachu')).toBe('.3284Not-a-pikachu');
});
