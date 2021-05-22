/* VARIABLES 
-----------------------------
*/
const form = document.getElementsByTagName('form')[0];
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const locationInputs = document.querySelectorAll('[name=location]');
let locationValid = false;
const checkboxInput = document.getElementById('checkbox1');

const fields = [
    'firstName', 
    'lastName', 
    'email', 
    'birthdate',
    'quantity',
    'checkbox1'
];

/*  DISONER
-----------------------------
*/
disableSubmitBtn();
listenForFormChange();

/* FUNCTIONS 
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
    const mailformat = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (mail.length < 6) {
        return false;
    }
    if (!mail.match(mailformat)) {
        return false;
    }
    return true;
}

function isBirthdateValid(date) {
    const dateformat = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    if (!dateformat.test(date) || date == "") {
        return false;
    }
    return true;
}

function isQuantityValid(num) {
    if (num.length < 1) {
        return false;
    }
    return true;
}

function isCheckbox1Valid() {
    if (checkboxInput.checked == true) {
        return true;
      }
      return false;
}

function listenForLocationChange() {
    for (let locationInput of locationInputs) {
        locationInput.addEventListener('click', (e) => {
            locationValid = true;
            disableSubmitBtn();
            if (isFormValid()) {
                enableSubmitBtn();
            }
        })
    }
}

function listenForFormChange() {
    listenForLocationChange();
    fields.forEach(field => {
        let input = document.getElementById(field);
        input.addEventListener('input', function () {
            //let input = document.getElementById(field);
            hideError(field);
            disableSubmitBtn();
            let validator = formatValidationName(field);
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
    if (isFirstNameValid(firstNameInput.value) 
        && isLastNameValid(lastNameInput.value) 
        && isEmailValid(emailInput.value) 
        && isBirthdateValid(birthdateInput.value) 
        && isQuantityValid(quantityInput.value)
        && locationValid
        && isCheckbox1Valid(checkboxInput.value)
        ){
        isValid = true;
    }
    return isValid;
}

function confirmValidationForm () {
    alert("Merci ! Votre réservation a été reçue.");
}

function hideError(field) {
    let input = document.getElementById(field);
    let parent = input.closest('div');
    parent.setAttribute('data-error-visible', false);
}

function showError(field) {
    let input = document.getElementById(field);
    let parent = input.closest('div');
    parent.setAttribute('data-error-visible', true);
}

function formatValidationName (field) {
    field = field.charAt(0).toUpperCase() + field.slice(1);
    return 'is' + field + 'Valid';
}