function register() {
    const name = document.getElementById('regName').value;
    const surname = document.getElementById('regSurname').value;
    const studentID = document.getElementById('regStudentID').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const dob = document.getElementById('regDOB').value;
    const age = document.getElementById('regAge').value;
    const course = document.getElementById('regCourse').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const agreement = document.getElementById('regAgreement').checked;

    if (name && surname && studentID && email && password && dob && age && course && gender && agreement) {
        localStorage.setItem('student', JSON.stringify({ name, surname, studentID, email, password, dob, age, course, gender }));
        alert('Регистрация успешна!');
    } else {
        alert('Заполните все поля и подтвердите согласие!');
    }
}

function login() {
    const studentID = document.getElementById('authStudentID').value;
    const password = document.getElementById('authPassword').value;

    const storedStudent = JSON.parse(localStorage.getItem('student'));

    if (storedStudent && storedStudent.studentID === studentID && storedStudent.password === password) {
        alert(`Добро пожаловать, ${storedStudent.name} ${storedStudent.surname}!`);
    } else {
        alert('Неверные учетные данные!');
    }
}