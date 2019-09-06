const getAuthTokens = require('./../connector/getAuthTokens');

const jackEyeViewHandler = async function (request, reply) {
    const { query = {} } = request,
        { airline = '', code = '' } = query;

    const viewJson = await getAuthTokens(code);
    reply.view('/templates/view', { ...viewJson });
};

module.exports = jackEyeViewHandler;
