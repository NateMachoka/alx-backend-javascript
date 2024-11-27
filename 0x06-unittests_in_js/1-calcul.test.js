const assert = require('assert');
const calculate = require('./1-calcul');

describe('calculate function', () => {
    describe('SUM operation', () => {
        it('should return 5 when adding 2.4 and 2.5', () => {
            assert.strictEqual(calculate('SUM', 2.4, 2.5), 5);
        });

        it('should return -3 when adding -1.7 and -1.4', () => {
            assert.strictEqual(calculate('SUM', -1.7, -1.4), -3);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return -1 when subtracting 1.4 from 2.5', () => {
            assert.strictEqual(calculate('SUBTRACT', 1.4, 2.5), -2);
        });

        it('should return 2 when subtracting -1.4 from 1.3', () => {
            assert.strictEqual(calculate('SUBTRACT', 1.3, -1.4), 2);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return 2 when dividing 4.4 by 2.3', () => {
            assert.strictEqual(calculate('DIVIDE', 4.4, 2.3), 2);
        });

        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculate('DIVIDE', 4.4, 0), 'Error');
        });

        it('should return -2 when dividing -4.5 by 2.1', () => {
            assert.strictEqual(calculate('DIVIDE', -4.5, 2.1), -2);
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => calculate('INVALID', 2.4, 2.5), /Invalid type/);
        });
    });
});
