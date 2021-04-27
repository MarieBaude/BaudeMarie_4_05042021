/** VARIABLES
 * ---------------------------------------
 * ---------------------------------------
 */
let form = document.getElementsByTagName('form')[0];
let fields = ['firstName', 'lastName', 'email', 'birthdate', 'quantity', 'location', 'checkbox'];
let messages = {
    firstName: "Le prénom n'est pas valide.",
    lastName: "Le nom n'est pas valide.",
    email: "L'email n'est pas valide.",
    birthdate: "La date de naissance n'est pas valide.",
	quantity: "La quantitée n'est pas valide.",
	location: "Choisissez une ville.",
	checkbox: "Merci d'accepter les conditions d'utilisations.",
}

/** EVENTS
 * ---------------------------------------
 * ---------------------------------------
 */
disableSubmitBtn();
listenForFormChange();
listenForEachFieldChange();

/** FUNCTIONS
 * ---------------------------------------
 * ---------------------------------------
 */
// Rétablir le bouton quand le formulaire est valide
function listenForFormChange() {
    form.addEventListener('keydown', function() {
        disableSubmitBtn();
        if (isFormValid()) {
            enableSubmitBtn();
        }
    });
}

function isFormValid() {
    let isValid = true;
    fields.forEach(field => {
        let functionName = 'is' + capitalize(field) + 'Valid';
        let value = document.getElementById(field);
        if (!window[functionName](value)) {
            isValid = false;
        }
    })
    return isValid;
}

function listenForEachFieldChange() {
    fields.forEach(field => {
        let input = document.getElementById(field);
        input.addEventListener('keydown', function() {
            hideError(field);
            let functionName = 'is' + capitalize(field) + 'Valid';
            if (!window[functionName](input.value)) {
                showError(field, messages[field]);
            }
        })
    })
}

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

function showError(field, message) {
    if (isFormValid) {
        
    }
}

function hideError(field) {
    // valeur correct, retirer
}

//Majuscule
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function isNameValid(name){
    name = name.trim(' ');
    if (name.length < 2) {
        return false;
    }
    if (name.length > 20) {
        return false;
    }
    return true;
}