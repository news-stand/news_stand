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

  describe('GET /articles for multiple topics and sources', function() {
    const options = {
      params: {
        topics: ['art', 'music'],
        selectedSources: ['bbc-news', 'cnn'],
        sortBy: 'popularity',
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

  describe('GET /articles for multiple sources, but no topics', function() {
    const options = {
      params: {
        topics: [],
        selectedSources: ['bbc-news', 'cnn'],
        sortBy: 'popularity',
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

  describe('GET /articles for multiple topics and, but no sources', function() {
    const options = {
      params: {
        topic: ['art', 'music'],
        selectedSources: [],
        sortBy: 'popularity',
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

    it('returns articles with a default source of espn', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.data[0].source.name.toLowerCase()).toBe('espn');
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
