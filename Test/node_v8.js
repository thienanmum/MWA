// var fs = require("fs");
// // sometimes setImmediate callback is executed before setTimeout callback
// setImmediate(() => console.log("setImediate before IO"));
// setTimeout(() => { console.log("setTimeout")}, 0);
// // process.nextTick(() => console.log("nextTick"));
// fs.readFile(`${__dirname}/Data.txt`, {encoding:"utf-8"}, (err,data)=> {
//     // console.log(data);
//     console.log("Read File Completed");
// });
// setImmediate(() => console.log("setImediate after IO"));
// setTimeout(() => { console.log("setTimeout after IO")}, 0);

var giveMePiza = function(){
    return new Promise((resolve,reject) => resolve('this is true'));
}
giveMePiza().then(a=> console.log(a));
console.log('call piza');

async function myFunc() {
    var msg = await giveMePiza();
    console.log(msg);
}

myFunc();
console.log('finish async');