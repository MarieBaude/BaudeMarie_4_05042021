/* VARIABLES 
-----------------------------
*/
const form = document.getElementsByTagName('form')[0];
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const locationInput = document.getElementById('location');
const checkboxInput = document.getElementById('checkbox1');


const fields = ['firstName', 'lastName', 'email'/*, 'birthdate', 'quantity', 'location', 'checkbox1'*/];

/*  
-----------------------------
*/
disableSubmitBtn();
listenForFormChange();

/* FONCTIONS 
-----------------------------
*/
function disableSubmitBtn() {
    let submitBtn = document.querySelector('.btn-submit');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.style.opacity = 0.5;
    submitBtn.style.cursor = "not-allowed";
}

function enableSubmitBtn() {
    let submitBtn = document.querySelector('.btn-submit');
    submitBtn.removeAttribute('disabled');
    submitBtn.style.opacity = 1;
    submitBtn.style.cursor = "pointer";
}

function isFirstNameValid(name) {
    name = name.trim(' ');
    if (name.length < 1) {
        return false;
    }
    return true;
}

function isLastNameValid(name) {
    name = name.trim(' ');
    if (name.length < 1) {
        return false;
    }
    return true;
}

/*function isMailValid(mail) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.value.match(mailformat)) {
        return false;
    }
    return true;
}*/

/*function isBirthdateValid() {
    let birthdateformat = ^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$;
    if () {
        return false;
    }
    return true;
}*/

function listenForFormChange() {
    fields.forEach(field => {
        let input = document.getElementById(field);
        input.addEventListener('keydown', function () {
            hideError(field);
            if (!isFirstNameValid(field.value)) {
                showError(field);
            }
            if (isFormValid()) {
                enableSubmitBtn();
            }
        });
    })
}

function isFormValid() {
    let isValid = true;
    if (isFirstNameValid(firstNameInput.value) &&
        isLastNameValid(firstNameInput.value)) { 
        isValid = false;
    }
    return isValid;
}

function hideError(field) {
    let parent = field.closest('div');
    parent.setAttribute('date-error-visible', false);
}

function showError(field) {
    let parent = field.closest('div');
    parent.setAttribute('data-error-visible', true)
}