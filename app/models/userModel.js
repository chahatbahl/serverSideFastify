const BaseModel = require('../../base/baseModal');

/**
 * Creates an instance of UserModel.
 * @param {string} collection mongodb collection name
 * @param {any} rest
 * @memberof UserModel
 */

class UserModel extends BaseModel {
    constructor(props) {
        super(props);
        this.collection = 'user';
    }

    associate(userId) {
        const criteria = {
            userId
        };
        return new Promise((resolve, reject) => {
            this
                .store
                .findOne(criteria, (err, docs) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(docs);
                });
        });
    }

}

module.exports = UserModel;
