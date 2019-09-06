class BaseModel {
    constructor() { } // eslint-disable-line

    attachCollection(db) {
        if (typeof db === 'undefined') {
            this.store = null;
        }

        this.store = db.collection(this.collection);
    }

    findData(criteria = {}, fields = [], limit = 0) {
        let nodes = {};
        _.map(fields, (field) => (
            nodes[field] = 1
        ));
        return new Promise((resolve, reject) => {
            if (limit) {
                // if limit is present
                this
                    .store
                    .find(criteria, { fields: nodes })
                    .limit(limit)
                    .toArray((err, docs) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(docs);
                    });
            } else {
                // limit is not present
                this
                    .store
                    .find(criteria, { fields: nodes })
                    .toArray((err, docs) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(docs);
                    });
            }
        });
    }
}

module.exports = BaseModel;
