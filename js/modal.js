// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// ==================
// =========== MODALS
// ==================

// PARAMS Modal sub
const modalInscription = ".bground";
const btnInscriptionClose = ".close";
// PARAMS Modal valid
const messageValidation = ".wrapper-modal-confirmation";
const btnMessageValidation = ".closeMsgValidation";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal(m, b) {
  const recModal = document.querySelector(m);
  const btnListener = document.querySelector(b);
  function closeModal() {
    recModal.style.display = "none";
    localStorage.clear();
  }
  btnListener.addEventListener("click", closeModal);
}

// close sub modal
closeModal(modalInscription, btnInscriptionClose);
// close valid modal
closeModal(messageValidation, btnMessageValidation);

// close modal
document
  .getElementById("buttonValidationClose")
  .addEventListener("click", closeModalValidation);
function closeModalValidation() {
  let modalClose = document.querySelector(messageValidation);
  modalClose.style.display = "none";
  localStorage.clear();
}

// ==================
// ============= FORM
// ==================
//;
// REGEX => Expressions régulières => examine les chaines de caractères

let regex = /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/;
// ne commence pas par un espace + composé de caractères de a à z ou de A à Z + accents autorisés + au moins 2 caractères
let regexName = /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/;
let regexEmail =
  /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;
let regexDate = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;
let regexQuantity = /^[0-9]{1,}$/;

// firstname
document.getElementById("first").addEventListener("input", function (e) {
  validFirst();
});
// on récupère l'élément avec l'id "first" (index.html ligne 93) + écoute de l'event input => lance la fonction validFirst

function validFirst() {
  const elt = document.forms["reserve"]["first"].value;
  // on récupère la valeur de l'input "first" enfant du formulaire nommé reserve (index.html ligne 84)
  let errorPrenom = false;

  let msgError = document.getElementById("erreurPrenom");
  // on récupère l'élément avec l'id "erreurPrenom (index.html ligne 99)"
  let errorInputBorder = document.getElementById("first");
  // on récupère l'élément avec l'id "first" (index.html ligne 93)
  if (!elt) {
    // si pas de valeur => bord rouge + message erreur 1
    msgError.innerText = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid #e54858;";
    errorPrenom = false;
  }
  // si la valeur ne respecte pas la regex => bord rouge + message erreur 2
  else if (!regex.test(elt)) {
    msgError.innerText = "Veuillez entrer 2 caractères ou plus";
    errorInputBorder.style.border = "2px solid #e54858";
    errorPrenom = false;
  }
  // si la valeur respecte la regex => pas de bord + pas de message
  else if (regex.test(elt)) {
    msgError.innerText = "";
    errorInputBorder.style.border = "none";
    errorPrenom = true;
  } else {
    errorPrenom = true;
  }
  return errorPrenom;
}

// lastname
document.getElementById("last").addEventListener("input", function (e) {
  validLast();
});

function validLast() {
  let elt = document.forms["reserve"]["last"].value;

  let errorName = false;

  let msgError = document.getElementById("erreurNom");
  let errorInputBorder = document.getElementById("last");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid #e54858";
    errorName = false;
  } else if (!regexName.test(elt)) {
    msgError.innerHTML = "Veuillez entrer 2 caractères ou plus";
    errorInputBorder.style.border = "2px solid #e54858";
    errorName = false;
  } else if (regexName.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorName = true;
  }
  return errorName;
}

// email
document.getElementById("email").addEventListener("input", function (e) {
  validEmail();
});

function validEmail() {
  let elt = document.forms["reserve"]["email"].value;

  let errorEmail = false;
  let errorInputBorder = document.getElementById("email");

  let msgError = document.getElementById("erreurEmail");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid #e54858";
    errorEmail = false;
  } else if (!regexEmail.test(elt)) {
    msgError.innerHTML = "Votre email est invalide";
    errorInputBorder.style.border = "2px solid #e54858";
    errorEmail = false;
  } else if (regexEmail.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorEmail = true;
  }
  return errorEmail;
}

// birthdate
document.getElementById("birthdate").addEventListener("input", function (e) {
  validDate();
});

function validDate() {
  let elt = document.forms["reserve"]["birthdate"].value;

  let errorDate = false;
  let msgError = document.getElementById("erreurBirthdate");
  let errorInputBorder = document.getElementById("birthdate");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid #e54858";
    errorDate = false;
  }
  if (!regexDate.test(elt)) {
    msgError.innerHTML = "Vous devez entrer votre date de naissance.";
    errorInputBorder.style.border = "2px solid #e54858";
    errorDate = false;
  }
  if (regexDate.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorDate = true;
  }
  return errorDate;
}

// quantity
document.getElementById("quantity").addEventListener("input", function (e) {
  validQuantity();
});

function validQuantity() {
  let elt = document.forms["reserve"]["quantity"].value;
  let errorQuantity = false;

  let msgError = document.getElementById("erreurQuantity");
  let errorInputBorder = document.getElementById("quantity");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid #e54858";
    errorQuantity = false;
  }
  if (regexQuantity.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorQuantity = true;
  }
  return errorQuantity;
}

// location
const radioButtons = document.querySelectorAll('input[name="location"]');

for (const radioButton of radioButtons) {
  radioButton.addEventListener("input", showSelected);
}
function showSelected() {
  let errorLocation = false;
  let msgError = document.getElementById("spanErrorLocation");
  if (!this.value) {
    msgError.innerText = "Vous devez selectionner obligatoirement une ville";
    errorLocation = false;
  } else {
    msgError.innerText = "";
    errorLocation = true;
  }
  return errorLocation;
}

function validCheckRadioLocation() {
  let elt = document.forms["reserve"]["location"].value;
  let errorLocation = false;
  let msgError = document.getElementById("spanErrorLocation");
  if (!elt) {
    msgError.innerText = "Vous devez selectionner obligatoirement une ville";
    errorLocation = false;
  } else {
    msgError.innerText = "";
    errorLocation = true;
  }
  return errorLocation;
}

// user conditions
document.getElementById("checkbox1").addEventListener("input", function (e) {
  validCgu();
});

function validCgu() {
  let elt = document.forms["reserve"]["checkbox1"].checked;
  let errorCgu = false;
  let msgError = document.getElementById("spanErrorCheckCgu");

  if (!elt) {
    msgError.innerText = "Vous devez acceptez les termes et conditions";
    errorCgu = false;
  } else {
    msgError.innerText = "";
    errorCgu = true;
  }
  return errorCgu;
}

// stock on localstorage
function storageState() {
  return localStorage.setItem("etatMessage", true);
}

// validation modal
function validationModal() {
  if (localStorage.etatMessage) {
    let modalMessage = document.querySelector(".wrapper-modal-confirmation");
    modalMessage.style.display = "block";
  }
}

// submit event and check valid
document.forms["formValid"].addEventListener("submit", function (e) {
  let errorSubmitValidation = validFirst();
  errorSubmitValidation = validLast() && errorSubmitValidation;
  errorSubmitValidation = validEmail() && errorSubmitValidation;
  errorSubmitValidation = validDate() && errorSubmitValidation;
  errorSubmitValidation = validQuantity() && errorSubmitValidation;
  errorSubmitValidation = validCheckRadioLocation() && errorSubmitValidation;
  errorSubmitValidation = validCgu() && errorSubmitValidation;

  if (errorSubmitValidation == false) {
    e.preventDefault();
    return false;
  } else {
    storageState();
    return true;
  }
});

// confirmation after submit
validationModal();
