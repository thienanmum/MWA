const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    const src = fs.createReadStream(path.join(__dirname, "bigfile.jpg"));
    src.pipe(res);
}).listen(8000, () => {"Server is listening on port 8000"});