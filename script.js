document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let isValid = true;
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    const usernamePattern = /^[a-zA-Z0-9]{5,12}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (!usernamePattern.test(username.value)) {
        showError(username, 'Username must be 5-12 characters long and contain only letters and numbers.');
        isValid = false;
    } else {
        showSuccess(username);
    }
    
    if (!emailPattern.test(email.value)) {
        showError(email, 'Invalid email address.');
        isValid = false;
    } else {
        showSuccess(email);
    }
    
    if (!passwordPattern.test(password.value)) {
        showError(password, 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.');
        isValid = false;
    } else {
        showSuccess(password);
    }
    
    if (isValid) {
        alert('Registration successful!');
    }
});

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.visibility = 'hidden';
}
