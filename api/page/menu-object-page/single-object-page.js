const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_SINGLE);

const setHeaders = (request,) => {
    return request
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Source-Name', '{application_name}')
};

const getSingleObject = () => {
    return setHeaders(api.get(``));  
};

const getnotFound = () => {
    return setHeaders(api.get(`....`));
    
};

module.exports = {
    getSingleObject,
    getnotFound,
};