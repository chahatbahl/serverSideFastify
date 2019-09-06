const jackEye = require('./jackEye');
const jackEyeView = require('./jackEyeView');
const getUserData = require('./getUserData');
const loginForm = require('./loginForm');
const loginSubmit = require('./loginSubmit');

const routes = [
    jackEye, jackEyeView,
    getUserData, loginForm,
    loginSubmit
];

module.exports = routes;
