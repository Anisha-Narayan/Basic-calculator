// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        // Use eval to calculate the expression
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
