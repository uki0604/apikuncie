const httpLib = require('supertest');
const apKuncie = httpLib('https://api.kunciebootcampqa.com/api/bootcamp');

function getUserList() {
    return apKuncie
        .get('/users')
       
};
function deleteUser(userId) {
    return apKuncie
        .delete('/users/' + userId);
};
function getuserdetail(userId) {
    return apKuncie
       .get('/detail/users?id=' + userId);
};
function createUser() {
    return apKuncie
            .post('/users')
            .send({
                "name": "Uki",
                "phone_number": "08123123123",
                "address": "Bekasi",
                "point": 500,
                "is_registered": true,
                "vehicles": [
                    {
                        "name": "Yamaha - Matic",
                        "type": "Honda - injeksi"
                    },
                    {
                        "name": "Mobilio - CVT",
                        "type": "Honda - Semi Matic"
                    }
                ]
            });
};

function createUserModel2(bodyData) {
    return apKuncie
            .post('/users')
            .send(bodyData);
};

module.exports = {
    getuserdetail,
    getUserList,
    createUser,
    createUserModel2,
    deleteUser
}