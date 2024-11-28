const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi function', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy for the calculateNumber function
    const spy = sinon.spy(Utils, 'calculateNumber');
    // Call sendPaymentRequestToApi with 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Check that calculateNumber was called with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy
    spy.restore();
  });
});
