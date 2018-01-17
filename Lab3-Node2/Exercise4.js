const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

const src = fs.createReadStream(path.join(__dirname, "text.txt"));
const destZip = fs.createWriteStream(path.join(__dirname, "text.gz"));
src.pipe(gzip).pipe(destZip).on('finish', () => {
    const srcZip = fs.createReadStream(path.join(__dirname, "text.gz"));
    const destUnzip = fs.createWriteStream(path.join(__dirname, "text_unzip.txt"));
    srcZip.pipe(gunzip).pipe(destUnzip);
});
