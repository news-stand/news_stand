/* eslint-disable */
require('jasmine-expect');
require('dotenv').config()

const axios = require('axios');
const PORT = process.env.PORT || 8080;

const baseUrl = `http://localhost:${PORT}`;

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

    it('returns an array', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.data).toBeArray();
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

    it('returns an array of objects', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.data).toBeArrayOfObjects();
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
          expect(response.data).toBeArray();
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

    it('returns an array of objects', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.data).toBeArrayOfObjects();
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
        });
    });

  });

});
/* eslint-enable */
