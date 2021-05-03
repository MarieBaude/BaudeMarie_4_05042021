/* VARIABLES 
-----------------------------
*/
const form = document.getElementsByTagName('form')[0];
const firstNameImput = document.getElementById('firstName');
const lastNameImput = document.getElementById('lastName');
const emailImput = document.getElementById('email');
const birthdateImput = document.getElementById('birthdate');
const quantityImput = document.getElementById('quantity');

const fields = ['firstName', 'lastName', 'email'];


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
    if (name.length < 1) {
        return false;
    }
    return true;
}

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
    if (isFirstNameValid(firstNameImput.value) &&
        isLastNameValid(firstNameImput.value)) { 
        isValid = false;
    }
    return isValid;
}

function showError(field) {
    let parent = field.closest('div');
    parent.setAttribute('data-error-visible', true)
}

function hideError(field) {
    let parent = field.closest('div');
    parent.setAttribute('date-error-visible', false);
}