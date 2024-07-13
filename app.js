const BACKEND_URL = 'https://your-backend-app-service.azurewebsites.net';

document.getElementById('loginButton').addEventListener('click', () => {
    alert('Login functionality not implemented yet.');
});

document.getElementById('getUserButton').addEventListener('click', () => {
    fetch(`${BACKEND_URL}/api/getUser`)
        .then(response => response.json())
        .then(data => alert(`User: ${data.user}`))
        .catch(error => console.error('Error:', error));
});

document.getElementById('addUserButton').addEventListener('click', () => {
    fetch(`${BACKEND_URL}/api/addUser`, { method: 'POST' })
        .then(response => response.json())
        .then(data => alert(`User added to Global Admin: ${data.success}`))
        .catch(error => console.error('Error:', error));
});
