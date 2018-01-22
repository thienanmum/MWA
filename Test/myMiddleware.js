
module.exports = function(req, res, next) {
    console.log("Enter my middleware.");
    return next();
}