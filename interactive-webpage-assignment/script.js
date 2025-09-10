// script.js

// Event listener for the light/dark mode toggle
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Event listener for the collapsible FAQ section
const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Form validation logic
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    let errors = [];

    // Validate name
    if (nameInput.value.trim() === '') {
        valid = false;
        errors.push('Name is required.');
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        errors.push('Please enter a valid email address.');
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        valid = false;
        errors.push('Password must be at least 6 characters long.');
    }

    // Show error messages or success feedback
    if (!valid) {
        errorMessage.innerHTML = errors.join('<br>');
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Form submitted successfully!');
        form.reset();
    }
});