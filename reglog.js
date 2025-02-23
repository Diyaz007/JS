function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Регистрация успешна!');
    } else {
        alert('Заполните все поля!');
    }
}

function login() {
    const username = document.getElementById('authUsername').value;
    const password = document.getElementById('authPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Вход выполнен успешно!');
    } else {
        alert('Неверные учетные данные!');
    }
}