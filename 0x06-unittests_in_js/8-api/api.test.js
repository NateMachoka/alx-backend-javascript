const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;

// Use chai-http to make HTTP requests
chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status 200 for the GET / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res, body) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message for the GET / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res, body) => {
        expect(err).to.be.null;
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should have a server that listens on port 7865', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res, body) => {
        expect(err).to.be.null;
        expect(res.ok).to.be.true;
        done();
      });
  });

  it('should have the correct hostname', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res, body) => {
        expect(err).to.be.null;
        const hostname = res.request.host.split(':')[0];
        expect(hostname).to.equal('127.0.0.1');
        done();
      });
  });

  it('should have the correct port', (done) => {
  chai
    .request(app)
    .get('/')
    .end((err, res, body) => {
      expect(err).to.be.null;
      const port = res.request.host.split(':')[1];
      expect(port).to.be.a('string');
      done();
    });
  });
});
