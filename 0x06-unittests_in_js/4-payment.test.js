const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi function', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    // Stub the calculateNumber function to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message to the console', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
