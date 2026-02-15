const qnumber = Math.floor(Math.random() * 10);
const quotes = [
    "Lewis Hamilton - “In racing there are always things you can learn, every single day. There is always space for improvement, and I think that applies to everything in life.”",
    "Ayrton Senna - “If you no longer go for a gap that exists, you're no longer a racing driver.”",
    "Daniel Ricciardo - “Sometimes you've just got to lick the stamp and send it.”",
    "Sebastian Vettel - “We have to remember these days. There is no guarantee they will last forever. Enjoy them as long as they last.”",
    "Michael Schumacher - “I've always believed that you should never, ever give up and you should always keep fighting even when there's only a slightest chance.”",
    "Kimi Räikkönen - “Just leave me alone, I know what to do.”",
    "Ron Dennis - “You don't expect to be at the top of the mountain the day you start climbing.”",
    "Graham Hill - “I am an artist. The track is my canvas and my car is my brush.”",
    "Felipe Massa - “When you give up your hunger for success you are not racing full-heartedly anymore. Just to be there, that is not my style.”",
    "Fernando Alonso - “All the time you have to leave a space!”"
];
const quoteP = document.getElementById("quote");
quoteP.innerHTML = quotes[qnumber];
const dropdowns = document.querySelectorAll(".flex-dropdown");
dropdowns.forEach(dropdown => {
    const dropdownImg = dropdown.querySelector("img");
    dropdown.addEventListener('click', () => {
        dropdownImg.classList.toggle("active");
    })
});
const mobileMenuShow = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
mobileMenuShow.addEventListener('click', () => {
    mobileMenu.style.left = 0;
});
mobileMenuClose.addEventListener('click', () => {
    mobileMenu.style.left = "100%";
})
const accButton = document.querySelector(".acc-manager");
const mobileAccButton = document.querySelector(".mobile-acc-manager");
let currentAcc, firstname, username, email, age, password;
if (localStorage.getItem("currentAcc") != null) {
    currentAcc = localStorage.getItem("currentAcc");
    firstname = JSON.parse(localStorage.getItem("firstname"))[currentAcc];
    username = JSON.parse(localStorage.getItem("username"))[currentAcc];
    email = JSON.parse(localStorage.getItem("email"))[currentAcc];
    age = JSON.parse(localStorage.getItem("age"))[currentAcc];
    password = JSON.parse(localStorage.getItem("password"))[currentAcc];
    accButton.querySelector("button").innerText = firstname;
    const downArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    downArrow.setAttribute("fill", "#e2e2e2be");
    downArrow.setAttribute("width", "14px");
    downArrow.setAttribute("height", "14px");
    downArrow.setAttribute("viewBox", "0 0 24 24");
    const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath.setAttribute("d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z");
    downArrow.appendChild(svgPath);
    accButton.querySelector("button").appendChild(downArrow);
    accButton.classList.add("active");
}
function logout() {
    localStorage.removeItem("currentAcc");
    accButton.classList.remove("active");
    window.location.reload();
};
function delAcc() {
    accButton.classList.remove("active");
    let newFirstname = JSON.parse(localStorage.getItem("firstname"));
    newFirstname.splice(currentAcc, 1);
    localStorage.setItem("firstname", JSON.stringify(newFirstname));
    let newUsername = JSON.parse(localStorage.getItem("username"));
    newUsername.splice(currentAcc, 1);
    localStorage.setItem("username", JSON.stringify(newUsername));
    let newEmail = JSON.parse(localStorage.getItem("email"));
    newEmail.splice(currentAcc, 1);
    localStorage.setItem("email", JSON.stringify(newEmail));
    let newAge = JSON.parse(localStorage.getItem("age"));
    newAge.splice(currentAcc, 1);
    localStorage.setItem("age", JSON.stringify(newAge));
    let newPassword = JSON.parse(localStorage.getItem("password"));
    newPassword.splice(currentAcc, 1);
    localStorage.setItem("password", JSON.stringify(newPassword));
    localStorage.removeItem("currentAcc")
    window.location.reload();
}
if (document.querySelector(".acc-manager.active") != null) {
    document.querySelector(".acc-manager.active").addEventListener('click', accManager);
}
function accManager() {
    event.preventDefault();
    accButton.querySelector(".acc-drop").classList.toggle('active');
}
accButton.querySelector(".logout").addEventListener('click', logout);
accButton.querySelector(".delete-acc").addEventListener("click", delAcc);
console.log(currentAcc + firstname + username + email + age + password)