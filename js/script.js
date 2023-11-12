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
    window.location.href = "chat.html";
});


