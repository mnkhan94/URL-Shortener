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


});
