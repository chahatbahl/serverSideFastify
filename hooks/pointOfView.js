const pointOfView = require('point-of-view');

const pov = (fastify) => {
    fastify.register(pointOfView, {
        engine: {
            ejs: require('ejs')
        },
        includeViewExtension: true
    }, (err) => {
        console.log('error', err);
        if (err) throw err;
    });
    console.log('√ Point Of View: hook attached');
};

module.exports = function (fastify) {
    pov(fastify);
};
