var playButton = document.getElementById("play-button");
var homeButton = document.getElementById("Home-button");
var circles = document.getElementsByClassName("circlesClass");


Array.from(circles).forEach(circle => {
    var isGreen = false;

    circle.addEventListener('click', function () {
        isGreen = !isGreen;
        if (isGreen) {
            this.style.backgroundColor = "#527853";
        } else {
            this.style.backgroundColor = "#B31312";
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
    let showText = document.getElementById("show-text-random");
    showText.style.display = 'none';
}
function openMsgPanel() {
    let showText = document.getElementById("show-text-random");
    showText.style.display = 'flex';
}


function toggleMenu() {
    let menuContent = document.getElementById("all-button");
    if (menuContent.style.display === "none" || menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "none";
    }
}