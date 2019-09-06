const BaseModel = require('../../base/baseModal');

/**
 * Creates an instance of AuthTokenModel.
 * @param {string} collection mongodb collection name
 * @param {any} rest
 * @memberof AuthTokenModel
 */

class AuthTokenModel extends BaseModel {
    constructor(props) {
        super(props);
        this.collection = 'authtoken';
    }

    associate(code) {
        const criteria = {
            code
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

module.exports = AuthTokenModel;
