/** VARIABLES
 * ---------------------------------------
 * ---------------------------------------
 */
let forn = document.getElementsByTagName('form')[0];
let firstNameInput = document.getElementById('first');
let lastNameInput = document.getElementById('last');
let emailInput = document.getElementById('email');
let birthdateInput = document.getElementById('birthdate');
let quantityInput = document.getElementById('quantity');


disableSubmitBtn();
enableSubmitBtn();

/** EVENTS
 * ---------------------------------------
 * ---------------------------------------
 */
form.addEventListener('keydown', validate);

firstNameInput.addEventListener()


/** FUNCTIONS
 * ---------------------------------------
 * ---------------------------------------
 */
function validate() {
    if (!isNameValid(firstName.value)){
        return false
    }
    if (!isNameValid(lastName.value)){
        return false
    } 
}

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

function isNameValid(name){
    if (name.length < 2) {
        return false;
    }
    if (name.length > 20) {
        return false;
    }
    return true;
}