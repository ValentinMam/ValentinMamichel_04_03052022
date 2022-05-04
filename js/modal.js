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

// SUBMIT
