document.getElementById("name").addEventListener("keyup", firstName);
document.getElementById("age").addEventListener("keyup", age);
document.getElementById("email").addEventListener("keyup", email);
document.getElementById("name").addEventListener("keyup", unhide);
document.getElementById("profileimg").addEventListener("change", load);

function firstName() {
    document.getElementById('nameinput').innerHTML =
        document.getElementById("name").value;
}

function age() {
    document.getElementById('ageinput').innerHTML =
        document.getElementById("age").value;
}

function email() {
    document.getElementById('emailinput').innerHTML =
        document.getElementById("email").value;
}

function unhide() {
    let details = document.getElementById("hide");
    details.classList.add("unhide");
}

function load() {
    let barcontainer = document.getElementById("barcontainer");
    barcontainer.classList.add("unhide");
    document.getElementById("bar").style.width = "100%"; 
    document.getElementById('bartext').innerHTML = "Profielfoto geupload";
}