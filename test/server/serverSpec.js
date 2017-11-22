/* eslint-disable */
require('jasmine-expect');
require('dotenv').config()
const moment = require('moment');

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
          done();
        });
    });
  });

  describe('GET /articles for multiple topics and sources by popularity', function() {
    const options = {
      params: {
        topics: ['art', 'music'],
        selectedSources: [
          {
            id: 'bbc-news',
            label: 'BBC News',
          },
          {
            id: 'cnn',
            label: 'CNN',
          }
        ],
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
          done();
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
          done();
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

  describe('GET /articles for multiple sources, but no topics by popularity', function() {
    const options = {
      params: {
        topics: [],
        selectedSources: [
          {
            id: 'bbc-news',
            label: 'BBC News',
          },
          {
            id: 'cnn',
            label: 'CNN',
          }
        ],
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
          done();
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
          done();
        });
    });

  });

  describe('GET /articles for multiple topics, but no sources  by popularity', function() {
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
          done();
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
          done();
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
          done();
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
          done();
        });
    });

  });

  describe('GET /articles for empty topics and sources by popularity', function() {
    const options = {
      params: {
        topic: [],
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
          done();
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
          done();
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
          done();
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
          done();
        });
    });

  });

  describe('GET /articles for multiple topics and sources by most recent', function() {
    const options = {
      params: {
        topics: ['art', 'music'],
        selectedSources: [
          {
            id: 'bbc-news',
            label: 'BBC News',
          },
          {
            id: 'cnn',
            label: 'CNN',
          }
        ],
        sortBy: 'publishedAt',
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
          done();
        });
    });

    it('returns articles from today or yesterday', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          response.data.forEach((article) => {
            const day = moment(article.publishedAt).calendar().split(' ')[0].toLowerCase();
            const isRecent = day === 'today' || day === 'yesterday';
            expect(isRecent).toBe(true);
            done();
          })
        })
        .catch((err) => {
          throw new Error('Error with GET to route /articles ', err);
          done();
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
          done();
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
          done();
        });
    });

  });

});

/* eslint-enable */
