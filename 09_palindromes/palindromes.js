const palindromes = function (string) {
    const arr = string.toLowerCase().replace(/[^a-z0-9]/g,"").split("").reverse().join("").toString();
    return arr === string.replace(/[^a-z0-9]/g,"").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
