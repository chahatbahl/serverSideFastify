const jackEyeHandler = require('../handler/jackEyeHandler');
const tokenSchema = require('./../schema/tokenSchema');

const jackEye = {
    method: 'GET',
    url: '/torpedo/v1/jack-eye/token/:code',
    schema: tokenSchema,
    handler: jackEyeHandler
};

module.exports = jackEye;
