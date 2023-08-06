const repeatString = function(string,num) {
    if (num == 0 || string == '') {
        return '';
    } else if (num < 0) {
        return "ERROR";
    } else {
        string = 'hey';
        for (let i = 1; i < num; i++) {
            string = string + 'hey';
        }
        return string;
    } 
};

// Do not edit below this line
module.exports = repeatString;

//take string
//create container for first string
//expression that adds to the container