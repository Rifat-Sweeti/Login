// Toggle forms between Login and Register
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');
const loginNavBtn = document.getElementById('loginNavBtn');
const closeLoginForm = document.getElementById('closeLoginForm');
const closeRegisterForm = document.getElementById('closeRegisterForm');

loginNavBtn.addEventListener('click', function () {
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
});

registerLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
});

loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
});

closeLoginForm.addEventListener('click', function () {
    loginForm.style.display = 'none';
});

closeRegisterForm.addEventListener('click', function () {
    registrationForm.style.display = 'none';
});

// Login form validation
const loginFormElement = document.getElementById('login');
loginFormElement.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Enter a valid email';
        valid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        valid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
        loginForm.style.display = 'none'; // Optionally hide the form on success
    }
});

// Registration form validation
const registerFormElement = document.getElementById('register');
registerFormElement.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const regUsername = document.getElementById('reg-username');
    const regEmail = document.getElementById('reg-email');
    const regPassword = document.getElementById('reg-password');
    const regConfirmPassword = document.getElementById('reg-confirm-password');
    const regUsernameError = document.getElementById('regUsernameError');
    const regEmailError = document.getElementById('regEmailError');
    const regPasswordError = document.getElementById('regPasswordError');
    const regConfirmPasswordError = document.getElementById('regConfirmPasswordError');

    regUsernameError.textContent = '';
    regEmailError.textContent = '';
    regPasswordError.textContent = '';
    regConfirmPasswordError.textContent = '';

    if (regUsername.value.trim() === '') {
        regUsernameError.textContent = 'Username is required';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEmail.value.trim() === '') {
        regEmailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(regEmail.value)) {
        regEmailError.textContent = 'Enter a valid email';
        valid = false;
    }

    if (regPassword.value.trim() === '') {
        regPasswordError.textContent = 'Password is required';
        valid = false;
    } else if (regPassword.value.length < 6) {
        regPasswordError.textContent = 'Password must be at least 6 characters long';
        valid = false;
    }

    if (regConfirmPassword.value.trim() === '') {
        regConfirmPasswordError.textContent = 'Please confirm your password';
        valid = false;
    } else if (regPassword.value !== regConfirmPassword.value) {
        regConfirmPasswordError.textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
        registrationForm.style.display = 'none'; // Optionally hide the form on success
    }
});
