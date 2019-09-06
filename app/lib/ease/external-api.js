const axios = require('axios');
const { isEmpty } = require('lodash');
const ApiConfig = require('./../../config/apiConfig');
const config = require('./../../config/configuration');
/**
 * It will build the Req data for the external API according to GET and POST method
 * @params Options
 * @return JSON
 */
const _buildReqData = options => {
    const { api = '', headers = '', urlAppend = '', content = {} } = options,
        apiDetail = ApiConfig[api],
        ServerConfig = config.get(`ServerConfig`),
        envProtocol = config.get('envProtocol'),
        envDomain = config.get('envDomain'),
        { server = 'ums_srv', url, method } = apiDetail,
        { protocol, server: apiServer } = ServerConfig[server],
        baseUrl = `${envProtocol || protocol}://${envDomain || apiServer}`,
        apiUrl = `${baseUrl}${url}${urlAppend}`;

    let postData = {};
    if (method === 'POST') {
        postData = setPostData(content);
    }

    return {
        url: apiUrl,
        method,
        headers,
        ...postData
    };
};

/**
 * It will set the POST data for the request
 * @param content
 * @return JSON
 */
const setPostData = (content) => {
    return {
        data: content
    };
};

/**
 * This function will sanitize the response before sending it to client. Also it will handle the error scenarios
 * @return JSON
 */
const sanitizeResponse = (response) => {
    try {
        const { data = {} } = response,
            { status = {} } = data,
            { success = false } = status;

        if (success) {
            if (typeof data !== 'object' || isEmpty(data)) {
                //Log Error
            }
            return data;
        } else {
            let errorData = {};
            if (typeof data !== 'object' || isEmpty(data)) {
                let customError = [{ message: data }];
                errorData.error = true;
                errorData.errors = customError;
                errorData.status = { 'success': false }
                return errorData;
            }
            errorData = Object.assign({}, data);
            errorData.error = true;
            errorData.status = { 'success': false }
            return errorData;
            //handle false condition like 403, 400, 500, 502
        }
    } catch (e) {
        let errorData = {},
            customError = [{ errCode: 502, message: `Server is down! ${e}` }];

        errorData.error = true;
        errorData.errors = customError;
        errorData.status = { 'success': false }
        return errorData;
    }
};

const ExternalApiRequest = (options) => {
    const reqData = _buildReqData(options);
    return axios(reqData)
        .then(responseData => {
            return sanitizeResponse(responseData);
        })
        .catch(err => {
            return sanitizeResponse(err.response);
        });
};

module.exports = ExternalApiRequest;
