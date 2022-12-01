const fs = require('fs');
const path = require('path');

const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8'));

packageJSON.version = packageJSON.version ;//+ '-test-' + Date.now();

fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(packageJSON), 'utf-8');
console.log('generate package.json');
