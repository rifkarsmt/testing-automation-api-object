const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

const setHeaders = (request, data) => {
  return request
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .send(data)
};

const postAddObject = (data) => {
  return setHeaders(api.post(''), data)
}

const postAddRequestTimeout = (data, timeout) => {
  return setHeaders(api.post(''), data)
 .timeout({ response: timeout, deadline: timeout + 1 }) // Simulasi timeout dalam ms
}

module.exports = {
postAddObject,
postAddRequestTimeout,
};