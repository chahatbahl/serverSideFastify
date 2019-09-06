const compress = require('fastify-compress');

const fastifyCompression = (fastify) => {
    fastify.register(compress);
    console.log('√ Fastify Compression: hook attached');
};

module.exports = function (fastify) {
    fastifyCompression(fastify);
};
