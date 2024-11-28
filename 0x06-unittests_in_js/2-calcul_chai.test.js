const { expect } = require('chai');
const calculate = require('./2-calcul_chai');

describe('calculate function', () => {
    describe('SUM operation', () => {
        it('should return 5 when adding 2.4 and 2.5', () => {
            expect(calculate('SUM', 2.4, 2.5)).to.equal(5);
        });

        it('should return -3 when adding -1.7 and -1.4', () => {
            expect(calculate('SUM', -1.7, -1.4)).to.equal(-3);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return -2 when subtracting 1.4 from 2.5', () => {
            expect(calculate('SUBTRACT', 1.4, 2.5)).to.equal(-2);
        });

        it('should return 2 when subtracting -1.4 from 1.3', () => {
            expect(calculate('SUBTRACT', 1.3, -1.4)).to.equal(2);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return 2 when dividing 4.4 by 2.3', () => {
            expect(calculate('DIVIDE', 4.4, 2.3)).to.equal(2);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculate('DIVIDE', 4.4, 0)).to.equal('Error');
        });

        it('should return -2 when dividing -4.5 by 2.1', () => {
            expect(calculate('DIVIDE', -4.5, 2.1)).to.equal(-2);
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            expect(() => calculate('INVALID', 2.4, 2.5)).to.throw('Invalid type');
        });
    });
});
