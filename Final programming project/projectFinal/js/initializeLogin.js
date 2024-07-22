function initializeLogin() {
    const loginContainer = document.getElementById('loginContainer');
    const loginBackground = document.getElementById('loginBackground');
    const loginForm = document.getElementById('loginForm');

    loginContainer.style.display = 'block';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            loginBackground.style.display = 'none';
            document.getElementById('ticketBackground').style.display = 'flex';
        } else if (!storedPassword) {
            localStorage.setItem(username, password);
            document.getElementById('loginMessage').textContent = 'Usuario registrado.';
            document.getElementById('loginMessage').style.color = 'green';
        } else {
            document.getElementById('loginMessage').textContent = 'Usuario o contraseña incorrectos';
            document.getElementById('loginMessage').style.color = 'red';
        }
    });
}
