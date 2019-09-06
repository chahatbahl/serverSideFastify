const jackEyeViewHandler = require('./../handler/jackEyeViewHandler');

const jackEyeView = {
    method: 'GET',
    url: '/torpedo/v1/jack-eye',
    handler: jackEyeViewHandler
};

module.exports = jackEyeView;
