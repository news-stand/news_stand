const request = require('request');

const baseUrl = 'http://localhost:8080/';

describe("News Stand Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
