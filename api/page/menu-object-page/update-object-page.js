const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_SINGLE);

const setHeaders = (request, data) => {
  return request
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .send(data)
};

const putUpdateObject = (data) => {
  return setHeaders(api.put(''), data)
}

const putUpdateRequestTimeout = (data, timeout) => {
  return setHeaders(api.put(''), data)
 .timeout({ response: timeout, deadline: timeout + 1 }) // Simulasi timeout dalam ms
}

const getnotFound = () => {
    return setHeaders(api.put(`....`));
    
};

module.exports = {
putUpdateObject,
putUpdateRequestTimeout,
getnotFound,
};