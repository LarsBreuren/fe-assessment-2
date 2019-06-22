document.getElementById("naam").addEventListener("keyup", voornaam);
document.getElementById("leeftijd").addEventListener("keyup", leeftijd);
document.getElementById("email").addEventListener("keyup", email);
document.getElementById("naam").addEventListener("keyup", unhide);

function voornaam() {
    document.getElementById('naaminput').innerHTML =
        document.getElementById("naam").value;
}

function leeftijd() {
    document.getElementById('leeftijdinput').innerHTML =
        document.getElementById("leeftijd").value;
}

function email() {
    document.getElementById('emailinput').innerHTML =
        document.getElementById("email").value;
}

function unhide() {
    let details = document.getElementById("hide");
    details.classList.add("unhide");
}