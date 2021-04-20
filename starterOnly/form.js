/** VARIABLES
 * ---------------------------------------
 * ---------------------------------------
 */
let forn = document.getElementsByTagName('form')[0];
let firstNameImput = document.getElementById('first');
let lastNameImput = document.getElementById('last');
let emailImput = document.getElementById('email');
let birthdateImput = document.getElementById('birthdate');
let quantityImput = document.getElementById('quantity');


disableSubmitBtn();
//enableSubmitBtn();

/** EVENTS
 * ---------------------------------------
 * ---------------------------------------
 */
forn.addEventListener('submit', validate);


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
    if (name.lenght < 2) {
        return false;
    }
    if (name.lenght > 20) {
        return false;
    }
    return true;
}