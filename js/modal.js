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
