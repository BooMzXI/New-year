var playButton = document.getElementById("play-button");
var homeButton = document.getElementById("Home-button");
var circles = document.getElementsByClassName("circlesClass");

Array.from(circles).forEach(circle => {
    var isGreen = false;

    circle.addEventListener('click', function() {
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

function toggleMenu() {
    var menuContent = document.getElementById("all-button");
    
    if (menuContent.style.display === "none" || menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "none";
    }
}