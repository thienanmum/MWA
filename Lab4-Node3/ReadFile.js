const fs = require('fs');
process.on('message', (fileName) => {
    const data = fs.readFileSync(fileName, 'utf-8');
    process.send(data);
})