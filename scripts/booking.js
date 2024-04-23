// eslint-disable-next-line
/* eslint-disable */
/* jshint esversion: 6 */

// Variables
let costPerDay = 35; // Default daily rate
let numberOfDays = 0; // Initialized to 0
let clickedDays = []; // Array to store clicked days

// Function to update cost and UI
function updateCost() {
    const totalCost = costPerDay * numberOfDays;
    document.getElementById("calculated-cost").innerHTML = "$" + totalCost;
}

// Function to handle click on day buttons
function handleDayClick(day) {
    const dayElement = document.getElementById(day);
    if (!dayElement.classList.contains("clicked")) {
        dayElement.classList.add("clicked");
        numberOfDays++;
        clickedDays.push(day);
        updateCost();
    }
}

// Function to handle clear button click
function handleClearClick() {
    clickedDays.forEach(day => {
        document.getElementById(day).classList.remove("clicked");
    });
    numberOfDays = 0;
    clickedDays = [];
    updateCost();
}

// Function to handle half-day button click
function handleHalfDayClick() {
    costPerDay = 20;
    document.getElementById("half").classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    updateCost();
}

// Function to handle full-day button click
function handleFullDayClick() {
    costPerDay = 35;
    document.getElementById("full").classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    updateCost();
}

// Event Listeners
document.querySelectorAll(".day-button").forEach(button => {
    button.addEventListener("click", () => {
        handleDayClick(button.id);
    });
});

document.getElementById("clear-button").addEventListener("click", () => {
    handleClearClick();
});

document.getElementById("half").addEventListener("click", () => {
    handleHalfDayClick();
});

document.getElementById("full").addEventListener("click", () => {
    handleFullDayClick();
});
