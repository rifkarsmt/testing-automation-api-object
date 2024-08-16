const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_SINGLE);

const setHeaders = (request, data) => {
  return request
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .send(data)
};

const patchUpdateObject = (data) => {
  return setHeaders(api.patch(''), data)
}

const patchUpdateRequestTimeout = (data, timeout) => {
  return setHeaders(api.patch(''), data)
 .timeout({ response: timeout, deadline: timeout + 1 }) // Simulasi timeout dalam ms
}

const patchnotFound = () => {
    return setHeaders(api.patch(`....`));
    
};

module.exports = {
patchUpdateObject,
patchUpdateRequestTimeout,
patchnotFound,
};