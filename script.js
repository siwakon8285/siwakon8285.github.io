document.addEventListener('DOMContentLoaded', () => {
    console.log('Thai Culture Website Loaded');

    // Simple form validation for Login
    const loginForm = document.querySelector('form[action="login"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            if (username && password) {
                alert(`Welcome back, ${username}!`);
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Simple form validation for Signup
    const signupForm = document.querySelector('form[action="signup"]');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Account created successfully! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }
});
