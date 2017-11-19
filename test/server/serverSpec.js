const request = require('request');
const axios = require('axios');

const baseUrl = 'http://localhost:8080';

describe('News Stand Server', function() {

  describe('GET /', function() {
    it('returns status code 200', function(done) {
      axios.get(baseUrl)
        .then((response) =>{
          expect(response.status).toBe(200);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route / ', err);
        });
    });
  });

  // I beleive this test is failing because the middlware function is throwing an error
  // I don't have a .env file setup so I don't think I am actually able to make a request
  describe('GET /articles', function() {
    const options = {
      topic: null,
      source: null,
      sortBy: null,
      topHeadlines: true,
    };

    it('returns status code 200', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.status).toBe(200);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

    //not totally sure if this is how it works
    it('returns an array', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          console.log(response.data);
          expect(Array.isArray(response.data)).toBe(true);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

    xit('returns an array of objects', function(done) {
      request.get(`${baseUrl}/articles`, function(error, response, body) {
        expect(response.data).toBe(200);
        done();
      });
    });

  });

});
