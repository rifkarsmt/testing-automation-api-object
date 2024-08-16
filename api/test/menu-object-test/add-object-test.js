const assert = require('chai').expect;
const page = require('../../page/menu-object-page/add-object-page.js');

const testCase = {
    "positive": {
        "PostAdd": "As a User, I want to be able to Add Object",
    },
    "negative" : {
        "badRequestResponse": "As a User, I should get error 400 when Bad Request Response",
        "notFound": "As a User, I should get error 404 when Invalid Route",
        "reqTimeOut" : "As a User, I should get error 408 when the request times out",
     }
};

    describe(`Add Object`, () => {
    
    it(`@post ${testCase.positive.PostAdd} - Testing with Add Data Object`, async () => {
    const validDataCases = [
        {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
    ];
    for (const data of validDataCases){
    const response = await page.postAddObject(data);
    console.log(`Testing with data:`, data);
    console.log(response.body);
    assert(response.status).to.equal(200);
    }
    });

    it(`@post ${testCase.negative.badRequestResponse} - Testing with Invalid Data Object`, async () => {
        const validDataCases = [
            {
                "name": "1234567",
                "data": {
                   "year": true,
                   "price": false,
                   "CPU model": "!@#$%^",
                   "Hard disk size": "!@#$",
                }
             }
        ];
        for (const data of validDataCases){
        const response = await page.postAddObject(data);
        console.log(`Testing with data:`, data);
        console.log(response.body);
        assert(response.status).to.equal(400);
        }
        });

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.postAddRequestTimeout({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });


})

