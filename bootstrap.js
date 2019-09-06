const routes = require('./routes');
const middlewares = require('./app/middlewares');

const bootstrap = {
    init: function (fastify) {
        routes.customRoutes(fastify);
        middlewares.initialize(fastify);
    }
}

module.exports = bootstrap;
