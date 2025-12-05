function eye(el) {
    const passwordInput = document.getElementById("login-password");
    el.classList.toggle("show");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password"
    }
    passwordInput.focus()
}
let accounts = [];
window.addEventListener('submit', () => {
    event.preventDefault();
    const accName = document.getElementById("login-username").value;
    const accPass = document.getElementById("login-password").value;
    localStorage.setItem("username", accName);
    localStorage.setItem("password", accPass);
});