const assert = require('chai').expect;
const page = require('../../page/menu-object-page/get-list-object-page.js');

const testCase = {
    "positive": {
        "getList": "As a User, I want to be able to get List Of All Object",
    },
    "negative" : {
        "badRequestResponse": "As a User, I should get error 400 when Bad Request Response",
        "notFound": "As a User, I should get error 404 when Invalid Route",
        "reqTimeOut" : "As a User, I should get error 408 when the request times out",
     }
};

    describe(`List All Of Object`, () => {
    
    it(`@get ${testCase.positive.getList} - Testing With True endpoint`, async() => {    
        const response = await page.getListAllObject();
        console.log(response.body);
        assert(response.status).to.equal(200);
    })

    it(`@get ${testCase.negative.notFound} - Testing With True endpoint`, async() => {    
        const response = await page.getnotFound();
        console.log(response.body);
        assert(response.status).to.equal(404);
    })

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.getListAllObject({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });

})
