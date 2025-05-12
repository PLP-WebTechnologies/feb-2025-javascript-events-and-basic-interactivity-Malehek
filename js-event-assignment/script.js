
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('interactiveButton');
    const buttonFeedback = document.getElementById('buttonFeedback');
    const userForm = document.getElementById('userForm');
    const formFeedback = document.getElementById('formFeedback');

    button.addEventListener('click', () => {
        buttonFeedback.textContent = 'Button was clicked!';
    });

    button.addEventListener('dblclick', () => {
        buttonFeedback.textContent = 'Double-click detected!';
    });

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateEmail(email) && validatePassword(password)) {
            formFeedback.textContent = 'Form submitted successfully!';
        } else {
            formFeedback.textContent = 'Please fill out the form correctly.';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        return password.length >= 8;
    }
});