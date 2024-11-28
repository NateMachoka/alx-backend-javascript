const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi function', () => {
  let consoleSpy;

  beforeEach(() => {
    // Set up the spy for console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and call console.log once for arguments 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.callCount).to.equal(1);
  });

  it('should log "The total is: 20" and call console.log once for arguments 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.callCount).to.equal(1);
  });
});
