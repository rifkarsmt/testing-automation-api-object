const assert = require('chai').expect;
const page = require('../../page/menu-object-page/search-by-id-page.js');

const testCase = {
    "positive": {
        "getList": "As a User, I want to be able to get List Of All Object",
    },
    "negative" : {
        "badRequestResponse": "As a User, I should get error 400 when Bad Request Response",
        "notFound": "As a User, I should get error 404 when Invalid Route",
        "invalidData": "As a User, I should get error 400 when Invalid Data Parameter",
        "reqTimeOut" : "As a User, I should get error 408 when the request times out",
     }
};

    describe(`Search By ID`, () => {

    it(`@get ${testCase.positive.getList} - Testing with multiple data IDs`, async () => {
        const ids = ['3', '5', '10']; 
        for (const id of ids) {
            const response = await page.getObjectById(id);
            assert(response.status).to.equal(200);
            }
    });

    it(`@get ${testCase.positive.getList} - Testing With ID = 3`, async() => {
        const id = 3;   
        const response = await page.getObjectById(id);
        console.log(response.body);
        assert(response.status).to.equal(200);
    })

    it(`@get ${testCase.positive.getList} - Testing With ID = 5`, async() => {
        const id = '5';   
        const response = await page.getObjectById(id);
        console.log(response.body);
        assert(response.status).to.equal(200);
    })

    it(`@get ${testCase.positive.getList} - Testing With ID = 10`, async() => {
        const id = '10' ;    
        const response = await page.getObjectById(id);
        console.log(response.body);
        assert(response.status).to.equal(200);
    })

    it(`@get ${testCase.negative.invalidData} - Testing With ID using boolean`, async() => {
        const id = true; // harusnya kena 400 tapi ini masih passing ke 200 
        const response = await page.getObjectById(id);
        console.log(response.body);
        assert(response.status).to.equal(400);
    })

    it(`@get ${testCase.negative.notFound} - Testing with Invalid Route`, async() => {    
        const response = await page.getnotFound();
        console.log(response.body);
        assert(response.status).to.equal(404);
    })

    it(`@get ${testCase.negative.reqTimeOut} - Testing Request Timeout`, async () => {
        const response = await page.getRequestTimeout({
            timeout: 100 // Simulate a request timeout
        });
        console.log(response.body);
        assert(response.status).to.equal(408);
    });

})
