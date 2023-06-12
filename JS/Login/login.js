// login.js

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('user-type').value;

    if (userType === 'admin' && username === 'admin' && password === 'admin') {
        // Redireccionar al panel de administrador
        window.location.href = '../index.html';
    } else if (userType === 'user' && username === 'user' && password === 'user') {
        // Redireccionar a la parte visual del sitio web
        window.location.href = '../index.html';
    } else {
        alert('Usuario inválido. Por favor, inténtalo nuevamente.');
    }
});
