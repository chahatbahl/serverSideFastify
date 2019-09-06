const nconf = require('nconf');
const serviceDomain = process.env.SERVICE_DOMAIN;
const serviceProtocol = process.env.SERVICE_PROTOCOL;
const bucket = process.env.BUCKET;
let baseHost = process.env.BASE_HOST;
const nodeEnv = process.env.NODE_ENV || 'development';
const flightProductUrl = nodeEnv === 'development' ? `${baseHost}:3030` : baseHost;
const elasticSearchIp = process.env.ELASTIC_SEARCH_IP || 'localhost:9200';
const batchUnits = parseInt(process.env.BATCH_UNITS) || 30;
const batchGap = parseInt(process.env.BATCH_GAP) || 2; // seconds
const bulkUpdateLimit = parseInt(process.env.BULK_UPDATE_MAX_LIMIT) || 50;
const mongodb = process.env.MONGO_URL || 'mongodb://localhost:27017/torpedo';
const cookieDomain = process.env.COOKIE_DOMAIN;

nconf.argv().env();
nconf.file('config', `app/config/env/${nodeEnv}.json`);
nconf.set('envDomain', serviceDomain);
nconf.set('envProtocol', serviceProtocol);
nconf.set('bucket', bucket);
nconf.set('elasticSearchIp', elasticSearchIp);
const productUrl = nconf.get('flightProductUrl');
nconf.set('flightProductUrl', baseHost ? flightProductUrl : productUrl);
nconf.set('batchUnits', batchUnits);
nconf.set('batchGap', batchGap);
nconf.set('bulkUpdateLimit', bulkUpdateLimit);
nconf.set('mongodb', mongodb);
nconf.set('cookieDomain', cookieDomain);

module.exports = nconf;