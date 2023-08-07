const reverseString = function(string) {
    let stringContainer = [];
    [...stringContainer] = string;
  	text = "";
    for(const x of stringContainer.reverse()) {
    	text += x;  
      }
  	return text;
};

// Do not edit below this line
module.exports = reverseString;

//put in containerz