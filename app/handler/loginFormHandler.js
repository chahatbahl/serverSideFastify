const loginFormHandler = function (request, reply) {
    return reply.view('/templates/login');
};

module.exports = loginFormHandler;
