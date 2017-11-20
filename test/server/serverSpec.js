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

  describe('GET /articles for top headlines', function() {
    const options = {
      params: {
        topic: null,
        source: null,
        sortBy: null,
        topHeadlines: true,
      },
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
          expect(Array.isArray(response.data)).toBe(true);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

    it('returns an array of objects', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(typeof response.data[0]).toBe('object');
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

  });

  describe('GET /articles for topics and sources search', function() {
    const options = {
      params: {
        topic: ['art', 'music'],
        source: ['bbc-news', 'cnn'],
        sortBy: 'popularity',
        topHeadlines: false,
      },
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
          expect(Array.isArray(response.data)).toBe(true);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

    it('returns an array of objects', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(typeof response.data[0]).toBe('object');
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

  });

});
