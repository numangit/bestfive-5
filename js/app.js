//===== BONUS common functions======

// function to get input field value
function getInputFieldValueById(InputFieldId) {
    const inputField = document.getElementById(InputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

// function to get element text by id
function getElementTextbyId(elementId) {
    const elementTextField = document.getElementById(elementId);
    const elementTextString = elementTextField.innerText;
    const elementText = parseFloat(elementTextString);
    return elementText;
}
// function to set element 
function setElementById(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}

// function to create a new list for the target event player, span added for white text color
function createNewLi(targetEventPlayerName) {

    const selectedList = document.getElementById('selected-list');
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    newSpan.classList.add("text-white")
    newSpan.innerText = targetEventPlayerName;
    newLi.appendChild(newSpan);
    selectedList.appendChild(newLi);
}

//common variable 
let totalPlayerExpense = 0;
let selectedListLenght = 0;

// Adding event listner to "SELECT" buttons
const SelectedButtons = document.getElementsByClassName('select-btn');
for (const selectedButton of SelectedButtons) {
    selectedButton.addEventListener('click', function (event) {

        const targetButton = event.target;
        const targetEventPlayerName = targetButton.parentNode.querySelector('h5').innerText;

        if (selectedListLenght >= 5) {
            alert("Limit Reached: can't select more players")
        } else {
            createNewLi(targetEventPlayerName);
            targetButton.disabled = true;
            targetButton.classList.add("bg-secondary");
            selectedListLenght = document.getElementById("selected-list").children.length;
            setElementById("select-counter", selectedListLenght);
        }
    })

}

// Adding Event listener to "Calculate" button
document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById("per-player-field");

    // Error handling: to check if the input is a number and if its less than 0.
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('Please enter only valid number');
    } else {
        totalPlayerExpense = getElementTextbyId("player-expense");
        totalPlayerExpense = perPlayerExpense * selectedListLenght;
        setElementById("player-expense", totalPlayerExpense);
    }
})

// Adding event listener to "Calculate Total" button
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