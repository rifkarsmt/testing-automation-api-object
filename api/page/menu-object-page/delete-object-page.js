const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_DELETE);

const setHeaders = (request,) => {
    return request
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Source-Name', '{application_name}')
};

const deleteObject = () => {
    return setHeaders(api.delete(``));  
};

const deleteNotFound = () => {
    return setHeaders(api.delete(`....`));
    
};

const deleteRequestTimeout = (data, timeout) => {
    return setHeaders(api.delete(''), data)
   .timeout({ response: timeout, deadline: timeout + 1 }) // Simulasi timeout dalam ms
  }


module.exports = {
    deleteObject,
    deleteNotFound,
    deleteRequestTimeout, 
};