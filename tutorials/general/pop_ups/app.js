const contactForm = document.getElementById('contact-form');
const contactBtn = document.getElementById('contact-button');
const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-button');

contactBtn.addEventListener('click', showPopup, false);
contactBtn.form = 'contact';
signupBtn.addEventListener('click', showPopup, false);
signupBtn.form = 'signup';


function sendMessage() {
    console.log('Thank you for reaching out to our team!');

}

function signup() {
    console.log('Thank you for signing up!');
    signupForm.classList.remove('popup-active');
}

function showPopup(event) {
    console.log('Event: ', event);
    if (event.currentTarget.form === 'contact') {
        contactForm.classList.add('popup-active');
        console.log('In contact section of showPopup()');
    } else {
        signupForm.classList.add('popup-active');
        console.log('In signup section of showPopup()');
    }
}