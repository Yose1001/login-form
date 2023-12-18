const validateInput = (inputObj) => {
    const { username, password, role } = inputObj;

    const inputs = document.querySelectorAll('.text');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });

    const roleSelect = document.getElementById('role');
    roleSelect.style.borderColor = '';

    const isAnyInputEmpty = Object.values(inputObj).some(value => value.trim() === '');

    if (isAnyInputEmpty) {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');

        inputs.forEach(input => {
            input.style.borderColor = 'red';
        });

        roleSelect.style.borderColor = 'red';
        return;
    }

    if (username.trim().length <= 3) {
        alert('ชื่อผู้ใช้ต้องมีความยาวมากกว่า 3 ตัวอักษร');

        document.getElementById('username').style.borderColor = 'red';
        return;
    }

    if (/^\d/.test(username)) {
        alert('ชื่อผู้ใช้ไม่สามารถขึ้นต้นด้วยตัวเลขได้');

        document.getElementById('username').style.borderColor = 'red';
        return;
    }

    if (/\s/.test(username)) {
        alert('ชื่อผู้ใช้ไม่สามารถมีช่องว่างในระหว่างได้');

        document.getElementById('username').style.borderColor = 'red';
        return;
    }

    if (password.trim().length <= 4) {
        alert('รหัสผ่านต้องมีความยาวมากกว่า 4 ตัวอักษร');

        document.getElementById('password').style.borderColor = 'red';
        return;
    }

    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        alert('รหัสผ่านต้องประกอบด้วยทั้งตัวเลขและตัวอักษร');

        document.getElementById('password').style.borderColor = 'red';
        return;
    }

    if (role === "") {
        alert('กรุณาเลือก Role');

        roleSelect.style.borderColor = 'red';
        return;
    }

    window.location.href = 'https://www.example.com';
};

document.getElementById('signinBtn').addEventListener('click', function (event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const inputObj = { username, password, role };

    validateInput(inputObj);
});
