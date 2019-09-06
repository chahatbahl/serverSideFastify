const getUserData = require('../connector/getUserData');
const config = require('../config/configuration');

const loginSubmitHandler = async function (request, reply) {
    const { body = {} } = request,
        { userId = '', password = '' } = body;

    const userJson = await getUserData(userId, password),
        { success = false } = userJson;

    if (success) {
        // if (jeuid) {
        // creating jwt token code needs to be taken care here
        // decoded JWT to get username and info
        return reply.header('Set-Cookie', `jeuid=219ffwef9w0f; Domain=${config.get('cookieDomain')}; Path=/; Expires=Wed, 30 Aug 2028 00:00:00 GMT`)
            .view('/templates/view', { userId: 'Chahat' });// for now static
    }

    return reply.send(userJson);
};

module.exports = loginSubmitHandler;
