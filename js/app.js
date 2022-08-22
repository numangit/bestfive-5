//===== BONUS common functions======

// function to get input field value
function getInputFieldValueById(InputFieldId) {
    const inputField = document.getElementById(InputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}
// function to set element 
function setElementById(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}

// function to create a new list for the target event player
function createNewLi(targetEventPlayerName) {
    const selectedList = document.getElementById('selected-list');
    const newLi = document.createElement('li')
    newLi.innerText = targetEventPlayerName;
    selectedList.appendChild(newLi);
}

//common variable 
let counter = 0;
let playerSelectedCount;
let totalPlayerExpense;

// evenet lister and actions for select button
const SelectedButtons = document.getElementsByClassName('select-btn');
for (const selectedButton of SelectedButtons) {
    selectedButton.addEventListener('click', function (e) {

        const targetButton = e.target;
        const targetEventPlayerName = targetButton.parentNode.querySelector('h5').innerText;

        if (counter >= 5) {
            alert("Limit Reached: can't select more players")
        } else {
            createNewLi(targetEventPlayerName);
            targetButton.disabled = true;
            counter += 1;
            setElementById("select-counter", counter);
        }
    })

}

// event listener for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById("per-player-field");

    // Error handling: to check if the input is a number and if its less than 0.
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('Please enter only valid number');
    } else {
        totalPlayerExpense = perPlayerExpense * counter;
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