const ExternalApiRequest = require('../lib/ease/external-api');

const getAuthTokens = async (code) => {

    const options = {
        api: 'getAuthTokens',
        urlAppend: `${code}`
    };

    const response = await ExternalApiRequest(options);
    return response;
};

module.exports = getAuthTokens;
