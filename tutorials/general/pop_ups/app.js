const contactForm = document.getElementById('contact-form');
const contactBtn = document.getElementById('contact-button');
const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-button');

contactBtn.addEventListener('click', showPopup, false);
contactBtn.customParam = 'contact';
signupBtn.addEventListener('click', showPopup, false);
signupBtn.customParam = 'signup';

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        clearActivePopups();
    }
})

function sendMessage() {
    console.log('Thank you for reaching out to our team!');
    contactForm.classList.remove('popup-active');
}

function signup() {
    console.log('Thank you for signing up!');
    signupForm.classList.remove('popup-active');
}

function showPopup(event) {
    console.log('Event: ', event);
    clearActivePopups();
    if (event.currentTarget.customParam === 'contact') {
        contactForm.classList.add('popup-active');
        console.log('In contact section of showPopup()');
    } else {
        signupForm.classList.add('popup-active');
        console.log('In signup section of showPopup()');
    }
}

function clearActivePopups() {
    console.log('Clearing!');
    contactForm.classList.remove('popup-active');
    signupForm.classList.remove('popup-active');
}