let jwtDecode = require('jwt-decode');

const sendAccessDeniedResponse = () => {
    return {
        'status': {
            'success': false,
            'httpStatus': 403
        },
        'errors': [
            {
                'errCode': '403',
                'message': 'Access Denied'
            }
        ]
    }
}
const decodeJwt = (request, reply, next) => {
    const { raw: { method }, headers = {} } = request,
        { allowexternal = 'false' } = headers;
    if (method == 'OPTIONS' || allowexternal === 'true') {
        return next();
    }
    const authorization = request.headers['authorization'];
    request.userInfo = {};
    try {
        if (!_.isEmpty(authorization)) {
            const decodedJwt = jwtDecode(authorization);
            const { sub } = decodedJwt;
            if (!_.isEmpty(sub)) {
                const userInfo = JSON.parse(sub);
                const { userId, role = 'DEFAULT', additionalInfo = {}, emulateUser = {} } = userInfo;
                const { role: eur = '' } = emulateUser;
                request.userInfo.userId = userId;
                request.userInfo.role = role;
                request.userInfo.emulateUser = {
                    role: eur
                }
                request.userAdditionalInfo = additionalInfo;
            }
            return next();
        } else {
            reply.send(sendAccessDeniedResponse());
        }
    } catch (e) {
        //throw new Error(e);
        reply.send(sendAccessDeniedResponse());
    }
};

module.exports = decodeJwt;
