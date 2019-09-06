const userDataService = require('./../services/userDataService');

const getUserDataHandler = async (request, reply) => {
    const { body = {} } = request,
        { userId = '', password = '' } = body;
    try {
        const res = await userDataService.associate(userId);

        // empty res return error
        if (_.isEmpty(res)) {
            return reply.send({
                success: false,
                message: `User with id ${userId} not found`
            });
        }

        // checking saved password and retrieve password match
        const { password: savedPass = '' } = res;
        if (savedPass === password) {
            return reply.send({
                success: true,
                message: 'User fetched',
                ...res
            });
        }

        // sending password mismatch error
        return reply.send({
            success: false,
            message: 'Incorrect Password'
        });

    } catch (e) {
        // any other error while fetching
        return reply.send({
            success: false,
            message: JSON.stringify(e)
        });
    }
}

module.exports = getUserDataHandler;
