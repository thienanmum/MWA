const Rx = require('@reactivex/rxjs');
const http = require('http');
const {fork} = require('child_process');
const subject = new Rx.Subject();
const url = require("url");

subject.subscribe(e => {
    const myURL = url.parse(e.req.url, true);
    const childProcess = fork("ReadFile.js");
    childProcess.send(myURL.query.url);
    childProcess.on ('message', (data) => {
        e.res.end(data);
    });
});

http.createServer((req, res) => {
    if (req.url.indexOf('favicon') < 0) {
        subject.next({req: req, res: res});
    }
}).listen(4000, () => console.log("server listening on port 4000"));