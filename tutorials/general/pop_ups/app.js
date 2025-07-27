const contactForm = document.getElementById('contact-form');
const contactBtn = document.getElementById('contact-button');
const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-button');

contactBtn.addEventListener('onclick', showPopup(contactForm));
signupBtn.addEventListener('onclick', showPopup(signupForm));


function sendMessage() {
    console.log('Thank you for reaching out to our team!');

}

function signup() {
    console.log('Thank you for signing up!');
}

function showPopup(form) {
    form.classList.add('popup-active');
    console.log(`Adding class to element: ${form}`);
    // if (form === 'contact') {
    //     contactForm.classList.add('popup-active');
    //     console.log('adding active class to contact');
    // } else {
    //     signupForm.classList.add('popup-active');
    //     console.log('adding active class to signup');
    // }
}