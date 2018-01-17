const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    const fileName = path.join(__dirname, "bigfile.jpg");
    const src = fs.createReadStream(fileName);
    src.pipe(res);

    // fs.readFile(fileName, (err, data) => {
    //     if (err) throw err;
    //     res.write(data);
    // })

    // res.write(fs.readFileSync(fileName));

}).listen(8000, () => console.log("Server is listening on port 8000"));