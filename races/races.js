const raceBtn = document.getElementById("race-results");
const qualiBtn = document.getElementById("quali-results");
const raceResults = document.querySelector(".race-result");
const qualiResults = document.querySelector(".qualifying-result");
raceBtn.addEventListener('click', () => {
    raceResults.style.display = "flex";
    qualiResults.style.display = "none";
    raceBtn.style.backgroundColor = "#e2e2e22f";
    qualiBtn.style.backgroundColor = "transparent";
});
qualiBtn.addEventListener('click', () => {
    raceResults.style.display = "none";
    qualiResults.style.display = "flex";
    raceBtn.style.backgroundColor = "transparent";
    qualiBtn.style.backgroundColor = "#e2e2e22f";
});