const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any number is 0', () => {
    const nums = [0, 2, 4, 5, 6];
    expect(_.some(nums, num => num === 0)).toBe(true);
  });

  it('return false if no number equals 0', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num === 0)).toBe(false);
  });
  

});