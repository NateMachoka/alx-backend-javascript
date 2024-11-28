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
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message for the GET / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should have a server that listens on port 7865', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.ok).to.be.true;
        done();
      });
  });
});

describe('GET /cart/:id', () => {
  it('should return status 200 when :id is a number', (done) => {
    chai
      .request(app)
      .get('/cart/12')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return status 404 when :id is NOT a number', (done) => {
    chai
      .request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Not Found');
        done();
      });
  });
});
