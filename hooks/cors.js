const cors = require('fastify-cors');

const fastifyCors = (fastify) => {
    fastify.register(cors, {
        methods: ['OPTION', 'GET', 'PUT', 'POST'],
        exposedHeaders: ['Content-Type', 'Authorization']
    }, (err) => {
        console.log('error', err);
        if (err) throw err;
    });
    console.log('√ Fastify Cors: hook attached');
};

module.exports = function (fastify) {
    fastifyCors(fastify);
};
