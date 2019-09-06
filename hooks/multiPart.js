const multipart = require('fastify-multipart');

const fastifyMultipart = (fastify) => {
    fastify.register(multipart);
    console.log('√ Fastify Multipart: hook attached');
};

module.exports = function (fastify) {
    fastifyMultipart(fastify);
};
