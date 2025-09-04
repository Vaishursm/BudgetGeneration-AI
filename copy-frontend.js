const fs = require('fs-extra');

fs.removeSync('./frontend-build');
fs.copySync('./frontend/dist', './frontend-build');
