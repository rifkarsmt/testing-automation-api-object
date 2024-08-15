const assert = require('chai').expect;
const page = require('../../page/menu-object-page/delete-object-page.js');

const testCase = {
    "positive": {
        "deleteObject": "As a User, I want to be able Delete Object ID 6",
    },
    "negative" : {
        "badRequestResponse": "As a User, I should get error 400 when Bad Request Response",
        "notFound": "As a User, I should get error 404 when Invalid Route",
        "reqTimeOut" : "As a User, I should get error 408 when the request times out",
     }
};

    describe(`Delete Object`, () => {
    
    it(`@get ${testCase.positive.getList} - Testing With True endpoint`, async() => {    
        const response = await page.deleteObject();
        console.log(response.body);
        assert(response.status).to.equal(200);
    })

    it(`@get ${testCase.negative.notFound} - Testing With False endpoint`, async() => {    
        const response = await page.deleteNotFound();
        console.log(response.body);
        assert(response.status).to.equal(404);
    })

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.deleteRequestTimeout({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });

})
