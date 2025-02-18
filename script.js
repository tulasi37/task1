// script.js

// Function to create the snowfall effect
function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 4) + 's';
        snowflake.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(snowflake);
    }
}

// Call the createSnowflakes function on page load
createSnowflakes();

// Function to calculate factorial recursively
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}

// Function to calculate factorial iteratively
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to validate input and calculate factorial
function calculateFactorial() {
    let input = document.getElementById("numberInput").value;
    let number = parseInt(input);

    // Input validation
    if (isNaN(number) || number < 0) {
        alert("Please enter a valid positive integer.");
        return;
    }

    let result;
    let methodUsed = "";

    // Use recursive method for numbers less than or equal to 10 for demonstration
    if (number <= 10) {
        result = factorialRecursive(number);
        methodUsed = "Recursive Method";
    } else {
        result = factorialIterative(number);
        methodUsed = "Iterative Method";
    }

    // Display the result and method used
    document.getElementById("factorialResult").innerText = `Factorial: ${result}`;
    document.getElementById("methodUsed").innerText = `Method: ${methodUsed}`;
}
