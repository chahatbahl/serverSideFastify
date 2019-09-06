/**
 * Model Hook
 * Allowing model to have access to mongo collection as requested by Model
 *
 *  ---- Model Class ------
 *  class SampleModel extends BaseModel {
 *       constructor(props) {
 *           super(props);
 *           this.collection = 'bid';
 *       }
 *       get() {
 *           return new Promise((resolve, reject) => {
 *               this
 *                   .store
 *                   .find({})
 *                   .toArray((err, docs) => {
 *                       if (err) {
 *                           return reject(err);
 *                       }
 *                       return resolve(docs);
 *                   });
 *           });
 *       }
 *   }
 *
 */

const path = require('path');
const fp = require('fastify-plugin');
const { getFiles } = require('../utils/loader');

function init(fastify, { }, next) { //eslint-disable-line
    const appRoot = path.join(__dirname, '../app');
    const modelDir = path.join(appRoot, 'models');
    let allModels = [];

    allModels = allModels.concat(getFiles(modelDir));

    // if no model defines, pass control to the next hooks
    if (!allModels.length) {
        return next();
    }

    // Attach mongo collection with models
    // And add model into global namespace
    allModels.map((modelPath) => {
        const modelFile = modelPath.split('/').pop();
        const modelName = modelFile.split('.')[0];
        const ModelClass = require(modelPath);
        const modelInstance = new ModelClass();

        modelInstance.attachCollection(fastify.mongo.db);

        global[modelName] = modelInstance;

        return next();
    });
}

module.exports = function modelRegister(fastify) {
    fastify.register(fp(init), {}, (err) => {
        if (err) throw err;
    });
    console.log('√ Model Plugin: hook attached');
};
