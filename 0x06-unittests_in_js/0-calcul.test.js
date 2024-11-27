const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round inputs and return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round inputs and return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round inputs and return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round inputs and return 0 when inputs are -0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should round inputs and return -4 when inputs are -2.6 and -1.7', () => {
    assert.strictEqual(calculateNumber(-2.6, -1.7), -5);
  });
});
