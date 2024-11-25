// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {

  // Funktion för att aktivera/inaktivera submit-knappen
  const submitButtonEl = document.getElementById('submitButton');
  const promiseCheckbox = document.getElementById('promiseCheckbox');

  if (submitButtonEl && promiseCheckbox) {
    toggleSubmitButton();

    function toggleSubmitButton() {
      submitButtonEl.disabled = !promiseCheckbox.checked;
    }

    promiseCheckbox.addEventListener('change', toggleSubmitButton, false);
  }

  // Menyhantering för Milligram (index.html, publishing.html)
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const milligramMenu = document.querySelector('.menu');

  if (hamburgerMenu && milligramMenu) {
    hamburgerMenu.addEventListener('click', () => {
      milligramMenu.classList.toggle('active');
    });
  }

  // Menyhantering för Tailwind CSS-sidan (tailwind.html)
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('translate-y-0');
      navLinks.classList.toggle('-translate-y-full');
    });
  }

  // Menyhantering för Bulma-sidan (bulma.html)
  const bulmaMenuToggle = document.getElementById('menuToggle');
  const bulmaNavbarMenu = document.getElementById('navbarMenu');

  if (bulmaMenuToggle && bulmaNavbarMenu) {
    bulmaMenuToggle.addEventListener('click', () => {
      bulmaMenuToggle.classList.toggle('is-active');
      bulmaNavbarMenu.classList.toggle('is-active');
    });
  }
});