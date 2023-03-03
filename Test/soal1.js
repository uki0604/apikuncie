const expect = require('chai').expect;
// const { assert } = require('console');
const { it } = require('mocha');
const api = require('../api/api.js');
const assert = require('chai').assert;
// const dataTest = require('../data/data_user.js');
// const dataTestJSON = require('../data/data_user.json');

describe('API GET USER LIST - API GET {{base_url}}/api/bootcamp/users', async () => {
it ('User berhasil melakukan POST Data dan lakukan assertion terhadap response yang diterima', async () => {
    let response = await api.createUser('DHONY HULA HULA');
   // expect(response.status).to.equal(200);
    assert.equal(response.status, 200, 'berhasil');
    console.log(response.body);

    const idUser = response.body.id;

    // TODO: Panggil Get User List
    response = await api.getUserList();
    expect(response.status).to.equal(200);
});
})
