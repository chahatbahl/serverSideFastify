const loginSubmitHandler = require('../handler/loginSubmitHandler');
const loginSchema = require('./../schema/loginSchema');

const loginSubmit = {
    method: 'POST',
    url: '/torpedo/v1/login/submit',
    schema: loginSchema,
    handler: loginSubmitHandler
};

module.exports = loginSubmit;
