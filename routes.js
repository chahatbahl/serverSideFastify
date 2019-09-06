const routesInfo = require('./app/routes');

const _ = require('lodash');

const customRoutes = fastify => {
  _.forEach(routesInfo, (route) => {
    fastify.route(route);
  });
  global._ = _;
  return fastify;
};

const routes = {
  customRoutes
};

module.exports = routes;
