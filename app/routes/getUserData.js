const getUserDataHandler = require('../handler/getUserDataHandler');

const getUserData = {
    method: 'POST',
    url: '/torpedo/v1/user-data',
    handler: getUserDataHandler
};

module.exports = getUserData;
