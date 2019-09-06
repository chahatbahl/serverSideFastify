const authTokenService = require('./../services/authTokenService');

const jackEyeHandler = async (request, reply) => {
    const { params = {} } = request,
        { code = '' } = params;
    try {
        const res = await authTokenService.associate(code);

        // empty res return error
        if (_.isEmpty(res)) {
            return reply.send({
                success: false,
                message: `Token with code ${code} not found`
            });
        }

        // token fetched response
        return reply.send({
            success: true,
            message: 'Token fetched',
            ...res
        });

    } catch (e) {
        // any other error while fetching
        return reply.send({
            success: false,
            message: JSON.stringify(e)
        });
    }
}

module.exports = jackEyeHandler;
