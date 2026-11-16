const fs = require('fs');

const folderPath = 'myFolder/with/multiple/levels';
fs.mkdirSync(folderPath, { recursive: true });