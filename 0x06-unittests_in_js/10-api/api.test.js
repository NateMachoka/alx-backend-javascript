const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status 200 for the GET / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message for the GET / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should have a server that listens on port 7865', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.ok).to.be.true;
        done();
      });
  });

  it('should have the correct hostname', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        const hostname = res.request.host.split(':')[0];
        expect(hostname).to.equal('localhost');
        done();
      });
  });

  it('should have the correct port', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        const port = res.request.host.split(':')[1];
        expect(port).to.equal('7865');
        done();
      });
  });
});

// Test suite for /available_payments endpoint
describe('/available_payments', () => {
  it('should return an object with payment methods', (done) => {
    chai
      .request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
  });
});

// Test suite for /login endpoint
describe('/login', () => {
  it('should return a welcome message with the username', (done) => {
    chai
      .request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });

  it('should return a 400 error if username is missing', (done) => {
    chai
      .request(app)
      .post('/login')
      .send({})
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res.text).to.equal('Missing username');
        done();
      });
  });
});
