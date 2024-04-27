function scrollSlider(direction) {
    const slider = document.querySelector('.card-slider');
    const scrollAmount = slider.scrollWidth / 5; // Change the divisor to adjust scroll amount
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
// Define all UI variables
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// Load all event listeners
allEventListeners();

// Functions for all event listeners
function allEventListeners() {
  // Toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // Nav links click event
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
  // Click anywhere on the document to close the menu
  document.addEventListener('click', closeMenu);
}

// TogglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// NavLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// Close menu function
function closeMenu(event) {
  if (!event.target.closest('.site-navbar')) {
    // Clicked outside the nav menu, so close it
    navToggler.classList.remove('toggler-open');
    navMenu.classList.remove('open');
  }
}
