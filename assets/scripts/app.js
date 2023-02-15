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

function add() {
    const enteredNumber = getUserInputNumber(); // added this to be more DRY.
    const initialResult = currentResult;
    currentResult += enteredNumber; // can also put +userInput.value;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    
}

function subtract() {
    const enteredNumber = getUserInputNumber(); 
    const initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInputNumber(); 
    const initialResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInputNumber(); 
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




