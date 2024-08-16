const assert = require('chai').expect;
const page = require('../../page/menu-object-page/partially-update-object-page.js');

const testCase = {
    "positive": {
        "PatchObject": "As a User, I want to be able to Update  Object",
    },
    "negative" : {
        "badRequestResponse": "As a User, I should get error 400 when Bad Request Response",
        "notFound": "As a User, I should get error 404 when Invalid Route",
        "reqTimeOut" : "As a User, I should get error 408 when the request times out",
     }
};

    describe(`Partially Update Object`, () => {
    
    it(`@patch ${testCase.positive.PatchObject} - Testing with Update Object`, async () => {
    const validDataCases = [
        {
            "name": "Apple MacBook Pro 16 (Updated Name)"
         }
    ];
    for (const data of validDataCases){
    const response = await page.patchUpdateObject(data);
    console.log(`Testing with data:`, data);
    console.log(response.body);
    assert(response.status).to.equal(200);
    }
    });

    it(`@get ${testCase.negative.notFound} - Testing With Invalid Route`, async() => {    
        const response = await page.patchnotFound();
        console.log(response.body);
        assert(response.status).to.equal(404);
    })

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.patchUpdateRequestTimeout({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });


})

