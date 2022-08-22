//===== BONUS common functions======

// function to get input field value
function getInputFieldValueById(InputFieldId) {
    const inputField = document.getElementById(InputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}
//function to set element 
function setElementById(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}

let playerSelectedCount;
let totalPlayerExpense;

// event listener for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById("per-player-field");

    // Error handling: to check if the input is a number and if its less than 0.
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('Please enter only valid number');
    } else {
        totalPlayerExpense = perPlayerExpense * 5;
        setElementById("player-expense", totalPlayerExpense);
    }
})

// event listener for calculate total button
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerExpense = getInputFieldValueById('manager-expense-field');
    const coachExpense = getInputFieldValueById('coach-expense-field');

    // Error handling: to check if the input is a number and if its less than 0.
    if (isNaN(managerExpense) || isNaN(coachExpense) || managerExpense < 0 || coachExpense < 0) {
        alert('Please enter only valid number');
    } else {
        const totalExpense = managerExpense + coachExpense + totalPlayerExpense;
        setElementById('total-expense', totalExpense);
    }
})