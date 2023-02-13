const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    // alert('The result is ' + result); // <-- String Concatenation
    // return result; // returns the value to the rest of the code. 
    outputResult(currentResult, '');
}

// Calling a function
// currentResult = add(2, 3);

// When user click's + button then it executes add(). 
addBtn.addEventListener("click", add);



