/**
 * @description This particular Service acts a Gateway for the application.
 */

module.exports = {
    associate(userId) {
        return userModel.associate(userId);
    }
};
