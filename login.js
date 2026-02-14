const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".sign-up");
function eye(el) {
    const passwordInput = el.parentNode.querySelector("input");
    el.classList.toggle("show");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password"
    }
    passwordInput.focus()
};
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const accName = document.getElementById("login-username").value;
    const accPass = document.getElementById("login-password").value;
    const accIndex = JSON.parse(localStorage.getItem("username")).indexOf(accName);
    if (accIndex != -1) {
        if (accPass == JSON.parse(localStorage.getItem("password"))[accIndex]) {
            alert('Logged in succesfully ...');
            localStorage.setItem("currentAcc", accIndex);
            window.location.href = 'index.html';
        } else {
            alert('Username or Password is Incorrect');
        }
    } else {
        alert('Username doesnt exist');
    }
});
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstname, username, email, age, password;
    if (localStorage.getItem("firstname") === null) {
        firstname = [];
        username = [];
        email = [];
        age = [];
        password = [];
    } else {
        firstname = JSON.parse(localStorage.getItem("firstname"));
        username = JSON.parse(localStorage.getItem("username"));
        email = JSON.parse(localStorage.getItem("email"));
        age = JSON.parse(localStorage.getItem("age"));
        password = JSON.parse(localStorage.getItem("password"));
    }
    firstname.push(document.getElementById("firstname").value);
    username.push(document.getElementById("sign-up-username").value);
    email.push(document.getElementById("email").value);
    age.push(document.getElementById("age").value);
    password.push(document.getElementById("sign-up-password").value);
    localStorage.setItem("firstname", JSON.stringify(firstname));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("age", JSON.stringify(age));
    localStorage.setItem("password", JSON.stringify(password));
    alert('Sign Up completed. Please Login again...');
    window.location.reload();
});
function logSign() {
    if (loginForm.classList.contains("active")) {
        loginForm.classList.remove("active");
        signupForm.classList.remove("active");
    } else {
        loginForm.classList.add("active");
        signupForm.classList.add("active");
    }
};