const loginFormHandler = require('../handler/loginFormHandler');

const loginForm = {
    method: 'GET',
    url: '/torpedo/v1/login',
    handler: loginFormHandler
};

module.exports = loginForm;
