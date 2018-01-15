String.prototype.filterWords = function(bannedWords) {
    let result = this;
    for (let word of bannedWords) {
        result = result.replace(word, '***');
    }
    return result;
}
console.log("This house is nice!".filterWords(['house', 'nice']));