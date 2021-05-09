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
    if (name.length < 2) {
        return false;
    }
    return true;
}

function isLastNameValid(name) {
    name = name.trim(' ');
    if (name.length < 2) {
        return false;
    }
    return true;
}

function isEmailValid(mail) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) {
        return false;
    }
    return true;
}

/*function isBirthdateValid() {
    const birthdateformat = ^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$;
    if () {
        return false;
    }
    return true;
}*/

function listenForFormChange() {
    fields.forEach(field => {
        let input = document.getElementById(field);
        input.addEventListener('keydown', function () {
            let input = document.getElementById(field);
            hideError(field);
            let validator = formatValidationName(field)
            if (!window[validator](input.value)) {
                showError(field);
            }
            if (isFormValid()) {
                enableSubmitBtn();
            }
        });
    })
}

function isFormValid() {
    let isValid = false;
    if (isFirstNameValid(firstNameInput.value) &&
        isLastNameValid(lastNameInput.value) &&
        isEmailValid(emailInput.value)) { 
        isValid = true;
    }
    return isValid;
}

function hideError(field) {
    let input = document.getElementById(field);
    let parent = input.closest('div');
    parent.dateErrorVisible = false;
}

function showError(field) {
    let input = document.getElementById(field);
    let parent = input.closest('div');
    parent.dateErrorVisible = true;
}

function formatValidationName (field) {
    field = field.charAt(0).toUpperCase() + field.slice(1);
    return 'is' + field + 'Valid';
}