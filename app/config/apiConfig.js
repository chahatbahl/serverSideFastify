const ApiConfig = {
    getAuthTokens: {
        url: '/torpedo/v1/jack-eye/token/',
        method: 'GET',
        server: 'torpedo_srv'
    },
    getUserData: {
        url: '/torpedo/v1/user-data',
        method: 'POST',
        server: 'torpedo_srv'
    }
};

module.exports = ApiConfig;
