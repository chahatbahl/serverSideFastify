const ExternalApiRequest = require('../lib/ease/external-api');

const getUserData = async (userId, password) => {

    const options = {
        api: 'getUserData',
        content: {
            userId, password
        }
    };

    const response = await ExternalApiRequest(options);
    return response;
};

module.exports = getUserData;
