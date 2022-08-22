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

