const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// String Concatenation
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = 'An error \n' + 
//                     'occurred!';


outputResult(currentResult, calculationDescription);