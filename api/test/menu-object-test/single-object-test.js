const assert = require('chai').expect;
const page = require('../../page/menu-object-page/single-object-page.js');

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

    describe(`Single Of Object`, () => {
    
    it(`@get ${testCase.positive.getList} - Testing With True endpoint`, async() => {    
        const response = await page.getSingleObject();
        console.log(response.body);
        assert(response.status).to.equal(200);
    })

    it(`@get ${testCase.negative.notFound} - Testing With True endpoint`, async() => {    
        const response = await page.getnotFound();
        console.log(response.body);
        assert(response.status).to.equal(404);
    })

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.getSingleObject({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });

})
