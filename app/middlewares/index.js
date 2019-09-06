/**
 * Middleware List to be executed before each Request
 */
let BaseMiddleware = require('./base-middleware');

module.exports = {
    order: {
        preHandler: ['decodeJwt']
    },
    initialize: function (app) {
        let middleware;
        this.order.preHandler.forEach((item) => {
            middleware = require('./' + item);
            let baseMiddlwareObj = new BaseMiddleware();
            baseMiddlwareObj.init(app, 'preHandler', middleware);
        });
    }
};
