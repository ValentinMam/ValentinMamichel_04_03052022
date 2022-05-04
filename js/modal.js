// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// CONSTANTES

const modalInscription = ".bground";
const btnInscriptionClose = ".close";

// LAUNCH MODAL FUNCTION

// listen click event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// END OF LAUNCH MODAL FUNCTION

// CLOSE MODAL FUNCTION
function closeModal(m, b) {
  const recModal = document.querySelector(m);
  const btnListener = document.querySelector(b);

  function closeModal() {
    recModal.style.display = "none";
    // clear of local storage
    localStorage.clear();
  }
  btnListener.addEventListener("click", closeModal);
}

// close signUp modal
closeModal(modalInscription, btnInscriptionClose);

// END OF CLOSE MODAL FUNCTION

// ISSUES #1 => OK

// FORM

// REGEX
let regexFirstName = /^[a-zA-Z-\s]{2,}$/;
let regexLastName = /^[a-zA-Z-\s]{2,}$/;
let regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexBirthDate = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;

// FIRSTNAME

document.getElementById("firstName").addEventListener("input", function (e) {
  validFirstName();
});

function validFirstName() {
  const elt = document.forms["reserve"]["firstName"].value;
  let errorFirstName = false;
  let msgError = document.getElementById("errorFirstName");
  let errorInputBorder = document.getElementById("firstName");

  if (!elt) {
    msgError.innerText = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorFirstName = false;
  } else if (!regexFirstName.test(elt)) {
    msgError.innerText = "Veuillez entrer 2 caractères ou plus";
    errorInputBorder.style.border = "2px solid red";
    errorFirstName = false;
  } else if (regexFirstName.test(elt)) {
    msgError.innerText = "";
    errorInputBorder.style.border = "none";
    errorFirstName = true;
  } else {
    errorFirstName = true;
  }
  return errorFirstName;
}

// LASTNAME

document.getElementById("lastName").addEventListener("input", function (e) {
  validLast();
});

function validLast() {
  let elt = document.forms["reserve"]["lastName"].value;
  let errorLastName = false;

  let msgError = document.getElementById("errorLastName");
  let errorInputBorder = document.getElementById("lastName");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorLastName = false;
  } else if (!regexLastName.test(elt)) {
    msgError.innerHTML = "Veuillez entrer 2 caractères ou plus";
    errorInputBorder.style.border = "2px solid red";
    errorLastName = false;
  } else if (regexLastName.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorLastName = true;
  }
  return errorLastName;
}

// EMAIL

document.getElementById("email").addEventListener("input", function (e) {
  validEmail();
});

function validEmail() {
  let elt = document.forms["reserve"]["email"].value;
  let errorEmail = false;
  let msgError = document.getElementById("errorEmail");
  let errorInputBorder = document.getElementById("email");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorEmail = false;
  } else if (!regexEmail.test(elt)) {
    msgError.innerHTML = "Votre email est invalide";
    errorInputBorder.style.border = "2px solid red";
    errorEmail = false;
  } else if (regexEmail.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorEmail = true;
  }
  return errorEmail;
}

// BIRTHDATE

document.getElementById("birthdate").addEventListener("input", function (e) {
  validBirthDate();
});

function validBirthDate() {
  let elt = document.forms["reserve"]["birthdate"].value;

  let errorBirthDate = false;
  let msgError = document.getElementById("errorBirthdate");
  let errorInputBorder = document.getElementById("birthdate");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorBirthDate = false;
  }
  if (!regexBirthDate.test(elt)) {
    msgError.innerHTML = "Vous devez entrer votre date de naissance.";
    errorInputBorder.style.border = "2px solid red";
    errorBirthDate = false;
  }
  if (regexBirthDate.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorBirthDate = true;
  }
  return errorBirthDate;
}

// =============NEXT STEPS ===============
// =======================================

// QUANTITY OF TOURNAMENT
// LOCATION
// USER CONDITIONS
// EMAILING ?

// SUBMIT

// CONFIRMATION MESSAGE
