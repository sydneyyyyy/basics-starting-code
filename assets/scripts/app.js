// alert('The result is ' + result); // <-- String Concatenation
// return result; // returns the value to the rest of the code. 
// Calling a function
// currentResult = add(2, 3);
// When user click's + button then it executes add().

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // empty array

// another example of being DRY.
function getUserInputNumber() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// Created to be more DRY. 
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry); // pushes the new value onto the array.  
    // console.log(logEntry.operation) // will return ADD.
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInputNumber(); // added this to be more DRY.
    if (
        calculationType !== 'AND' && 
        calculationType !== 'SUBTRACT' && 
        calculationType !== 'MULTIPLY' && 
        calculationType !== 'DIVIDE' || 
        !enteredNumber // if number is zero it is falsy.
    ) {
        return; // will exit the function without executing the remaining code in the function.
    }

    // Alternate option to code above using OR operators. 
    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' || 
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'
    // ) {}

    
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*'; 
    } else {
        currentResult /= enteredNumber; 
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




