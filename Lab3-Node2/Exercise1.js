const dns = require("dns");
dns.resolve4("www.mum.edu", (err, ip) => console.log(ip));