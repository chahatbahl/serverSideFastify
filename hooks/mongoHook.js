/**
 * Plugin Hook
 * Adding plugins to underlying framework `fastify`
 *
 *  ---- mongodb ------
 * Sample query
 * fastify.get('/', {}, (req, reply) => {
 *      const user = fastify.mongo.db.collection('user');
 *      user.find({}).toArray((err, docs) => {
 *          reply.send({ ...docs });
 *      });
 *  });
 *
 */

const fastifyMongo = require('fastify-mongodb');
const config = require('./../app/config/configuration');

const connectMongo = (fastify, connectionUri) => {
    fastify.register(fastifyMongo, {
        url: connectionUri,
        useUnifiedTopology: true
    }, (err) => {
        console.log('error', err);
        if (err) throw err;
    });
    console.log('√ Mongodb: hook attached');
};

module.exports = function (fastify) {
    if (config.get('mongodb')) {
        connectMongo(fastify, config.get('mongodb'));
    }
};
