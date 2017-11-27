/* eslint-disable */
require('jasmine-expect');
require('dotenv').config()

const axios = require('axios');
const Moment = require('moment');
const MomentRange = require('moment-range');
 
const moment = MomentRange.extendMoment(Moment);

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

describe('News Stand Server', function() {

  describe('GET /', function() {
    it('returns status code 200', function(done) {
      axios.get(`${baseUrl}/`)
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

    it('returns articles with a default source of techcrunch', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.data[0].source.name.toLowerCase()).toBe('techcrunch');
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

    it('returns articles with a default source of techcrunch', function(done) {
      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          expect(response.data[0].source.name.toLowerCase()).toBe('techcrunch');
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

    it('returns articles from the last week', function(done) {
      const beginDate = moment().subtract(1, 'weeks');
      const endDate = moment().add(1, 'days');
      const dateRange = moment().range(beginDate, endDate);

      axios.get(`${baseUrl}/articles`, options)
        .then((response) =>{
          response.data.forEach((article) => {
            const date = moment(article.publishedAt);
            const isRecent = date.within(dateRange);
            expect(isRecent).toBe(true);
            done();
          })
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
          done();
        });
    });

  });

  describe('POST /favorites', function() {
    const article = {
      source: {
        name: 'x'
      },
      author: 'x',
      title: 'x',
      description: 'x',
      url: 'https://success.salesforce.com/answers?id=9063A000000lCJhQAM',
      urlToImage: 'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1120%2Fr292170_1296x729_16%2D9.jpg',
      publishedAt: '2017-11-15T22:33:06Z'
    };

    it('returns status code 200 if not logged in', function(done) {
      axios.post(`${baseUrl}/favorites`, article)
        .then((response) =>{
          expect(response.status).toBe(200);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /favorites ', err);
          done();
        });
    });

    it('returns a message asking the user to log in if not logged in', function(done) {
      axios.post(`${baseUrl}/favorites`, article)
        .then((response) =>{
          expect(response.status).toBe(200);
          done();
        })
        .catch((err) => {
          throw new Error('Error with GET to route /favorites ', err);
          done();
        });
    });

  });

});

/* eslint-enable */
