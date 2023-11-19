function countdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
  
    const timeRemaining = newYear - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `Time until New Year's Day:<br>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
  setInterval(countdown, 1000);
  countdown();
  