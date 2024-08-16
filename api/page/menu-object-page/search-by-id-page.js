const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_BY_ID);

const setHeaders = (request,) => {
    return request
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Source-Name', '{application_name}')
};

const getnotFound = (id) => {
    return setHeaders(api.get(`${id}....`).query(id));
    
};

const getObjectById = (id) => {
    return setHeaders(api.get(``).query(id));
};

module.exports = {
    getnotFound,
    getObjectById,
};