/**
 * @description This particular Service acts a Gateway for the application.
 */

module.exports = {
    associate(code) {
        return authTokenModel.associate(code);
    }
};

