// main function 
function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(number);
    } else {
        oddCallback(number);
        }
}

//other functions 
function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

//function activation 
handleNum(2, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);
handleNum(0, handleEven, handleOdd);