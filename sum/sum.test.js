//I am using Jest testing framework. Look it up for more ideas on what keywords to use etc.

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});