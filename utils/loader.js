const fs = require('fs');
const path = require('path');

const isFile = source => !fs.lstatSync(source).isDirectory();

const getFiles = (source) => {
    const dirs = fs.readdirSync(source).map(name => path.join(source, name)).filter(isFile);
    return dirs;
};

module.exports = {
    getFiles
};
