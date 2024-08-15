const assert = require('chai').expect;
const page = require('../../page/menu-object-page/update-object-page.js');

const testCase = {
    "positive": {
        "PutObject": "As a User, I want to be able to Update  Object",
    },
    "negative" : {
        "badRequestResponse": "As a User, I should get error 400 when Bad Request Response",
        "notFound": "As a User, I should get error 404 when Invalid Route",
        "reqTimeOut" : "As a User, I should get error 408 when the request times out",
     }
};

    describe(`Update Object`, () => {
    
    it(`@put ${testCase.positive.PutObject} - Testing with Update Object`, async () => {
    const validDataCases = [
        {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 2049.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB",
               "color": "silver"
            }
         }
    ];
    for (const data of validDataCases){
    const response = await page.PutObject(data);
    console.log(`Testing with data:`, data);
    console.log(response.body);
    assert(response.status).to.equal(200);
    }
    });

    it(`@get ${testCase.negative.notFound} - Testing With Invalid Route`, async() => {    
        const response = await page.getnotFound();
        console.log(response.body);
        assert(response.status).to.equal(404);
    })

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.putUpdateRequestTimeout({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });


})

