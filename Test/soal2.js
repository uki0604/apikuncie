const chai = require('chai');
// chai.use(require('chai-json-schema'))
const expect = require('chai').expect;
const { it } = require('mocha');
const api = require('../api/api.js');
//const dataTest = require('../data/data_user.js');
//const dataTestJSON = require('../data/data_user.json');
//const dataSchema = require('../schema/schema_get_user.js');

describe('API GET USER LIST - API GET https://api.kunciebootcampqa.com/api/bootcamp/users dengan Hooks', async () => {
    let idUser = '';

    before(async () => {
        let response = await api.createUser('Pendekar berbaju hijau');
        expect(response.status).to.equal(200);
        // assert.notEqual(response.status, 200, 'berhasil');
        console.log(response.body);
        const idUser = response.body.id;
    })
        it('Dapat userlist', async () => {
            response = await api.getUserList();
            expect(response.status).to.equal(200);
        });
             it('berhasil delete', async () => {
        const response = await api.deleteUser(idUser)
    });
       it('berhasil get', async () => {
        response = await api.getuserdetail(idUser);
        expect(response.status).to.not.equal(404);
        
    });
});
