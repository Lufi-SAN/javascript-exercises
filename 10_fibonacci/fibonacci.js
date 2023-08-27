const fibonacci = function(arr) {
    arr = Number(arr);
    let fibarr = [0,1];
    if(arr < 1) {return ('OOPS')}
    else if (arr === 1) {return ( fibarr[0] + fibarr[1])}
    else {
        let counter = 2;
        for(let i = 1; i < arr; i++){
            fibarr.push(fibarr[(counter-2)] + fibarr[(counter-1)]);
            counter++;
        }
        return(fibarr[fibarr.length - 1]);
    }
};

// Do not edit below this line
module.exports = fibonacci;
