const chai = require('chai');
const expect = chai.expect;

const request = require('supertest');
const should = chai.should();

describe('CRUD Routes', () => {
  beforeEach(() => {
    server = require('../src/server.js');
    let dummy = 0
  });

  afterEach(() => {
    server.close();
  });

  it('should GET /api/v1/urls and return all urls', (done) => {
    request(server)
      .get('/api/v1/urls')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const urls = res.body;

        this.url = urls[0];
        // console.log(this.url)

        expect(urls.length);
      })
      .end(done);
  });

  it('should GET /api/v1/url/:id and return a URL object by id with its id, original_url, and short_url.', (done) => {
    request(server)
      .get('/api/v1/urls/' + this.url.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const url = res.body;
        expect(url).to.have.property('id');
        expect(url).to.have.property('original_url');
        expect(url).to.have.property('short_url');
      })
      .end(done);
  });

  it('should POST url to /api/v1/url/ return a URL object by id with its id, original_url, and short_url.', (done) => {
    const newUrl = {
      original_url: 'yahoo.com',
    };

    request(server)
      .post('/api/v1/url/')
      .send(newUrl)
      .expect((res) => {
        const url = res.body;
        dummy = url.id;
        expect(url).to.have.property('id');
        expect(url).to.have.property('original_url');
        expect(url).to.have.property('short_url');
      })
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });

  it('should DELETE url to /api/v1/url/ return a the object deleted.', (done) => {
    request(server)
      .delete('/api/v1/urls/' + dummy)
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.be.equal(1);
        done();
      });
  });
});
