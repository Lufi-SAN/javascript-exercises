const sumAll = function(firstNumber,lastNumber) {
    if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number') return 'ERROR';
    if (firstNumber < 0 || lastNumber < 0) return 'ERROR';
  	if ( firstNumber > lastNumber) {
      let lastN = lastNumber;  
      lastNumber = firstNumber;
        firstNumber = lastN;
        
    }
    let middleNumbersContainer = lastNumber;
    for(let i = lastNumber; i > (firstNumber+1);i--) {
        lastNumber = lastNumber - 1;
        middleNumbersContainer += lastNumber;
    }
    return middleNumbersContainer + firstNumber;
};


// Do not edit below this line
module.exports = sumAll;
