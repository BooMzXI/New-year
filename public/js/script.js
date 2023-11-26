var playButton = document.getElementById("play-button");
var homeButton = document.getElementById("Home-button");
var circles = document.getElementsByClassName("circlesClass");
var msg = document.getElementById("msg");

let server = "http://localhost:8000";

Array.from(circles).forEach(circle => {
    var isGreen = false;

    circle.addEventListener('click', function () {
        isGreen = !isGreen;
        if (isGreen) {
            this.style.backgroundColor = "green";
        } else {
            this.style.backgroundColor = "red";
        }
    });
});

playButton.addEventListener('click', () => {
    window.location.href = 'chat.html';
});

function redirectTo(page) {
    window.location.href = page;
}

function exitButton(){
    var showText = document.getElementById("show-text-random");
    showText.style.display = 'none';
}
function openMsgPanel() {
    var showText = document.getElementById("show-text-random");
    showText.style.display = 'flex';
}


function toggleMenu() {
    var menuContent = document.getElementById("all-button");
    if (menuContent.style.display === "none" || menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "none";
    }
}

function writeMsg() {
    fetch(server+"/write", {
        method: "POST",
        body: JSON.stringify({
            text: msg.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    msg.value = "";
}