/**
 * Hooks
 * All the application level hooks
 */
const mongoHook = require('./mongoHook');
const pointOfView = require('./pointOfView');
const compress = require('./compress');
const multiPart = require('./multiPart');
const cors = require('./cors');
const model = require('./model');

/**
 * @description attches hooks to the application one by one
 * @param {any} fastify object
 */
function attach(fastify) {
    pointOfView(fastify);
    compress(fastify);
    multiPart(fastify);
    cors(fastify);
    mongoHook(fastify);
    model(fastify);
}

module.exports = { attach };
