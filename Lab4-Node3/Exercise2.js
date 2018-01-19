const os = require('os');
const Rx = require('@reactivex/rxjs');


function checkSystem() {
    return new Promise((resolve, reject) => {
        if (os.totalmem() < 4 * 1024 * 1024 * 1024) {
            reject('This app needs at least 4 GB of RAM');
        } else if (os.cpus().length < 2) {
            reject("Processor is not supported");
        } else {
            resolve("System is checked successfully");
        }
    })
}

checkSystem().then(data => console.log(data)).catch(data => console.log(data));
console.log('Checking your system ...');

function checkSystemObservable() {
    return Rx.Observable.fromPromise(checkSystem());
}

setTimeout(() => {
    checkSystemObservable().subscribe(e => console.log(e));
    console.log('Observable: Checking your system ...');
}, 0);
