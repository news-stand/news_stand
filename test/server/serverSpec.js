const request = require('request');

const baseUrl = 'http://localhost:8080';

describe("News Stand Server", function() {

  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  //I beleive this test is failing because the middlware function is throwing an error
  // I don't have a .env file setup so I don't think I am actually able to make a request
  describe("GET /articles", function() {
    it("returns status code 200", function(done) {
      request.get(`${baseUrl}/articles`, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    //not totally sure if this is how it works
    it("returns an array", function(done) {
      request.get(`${baseUrl}/articles`, function(error, response, body) {
        expect(response.data).toBe(200);
        done();
      });
    });

    it("returns an array of objects", function(done) {
      request.get(`${baseUrl}/articles`, function(error, response, body) {
        expect(response.data).toBe(200);
        done();
      });
    });

  });

});
