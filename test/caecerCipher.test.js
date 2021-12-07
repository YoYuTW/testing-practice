const caecerCipher = require('../script/caecerCipher');

test('testing', () => {
  expect(caecerCipher('testing', 4)).toBe('xiwxmrk');
});

test('with symbols', () => {
  expect(caecerCipher('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('with negative shift', () => {
  expect(caecerCipher('bcdefghijklmnopqrstuvwxyza', -1))
    .toBe('abcdefghijklmnopqrstuvwxyz');
});