// Set the countdown time (in seconds)
let countdownTime = 3600; // 1 hr

function startCountdown() {
    const countdownDisplay = document.getElementById("countdown");

    // Update the timer every second
    const countdownInterval = setInterval(() => {
        // Calculate hours, minutes, and seconds
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        // Format the time as HH:MM:SS
        countdownDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        // Stop the countdown when it reaches zero
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Time's up!";
        }

        // Decrease the time by 1 second
        countdownTime--;
    }, 1000);
}

// Helper function to format time (add leading zero if needed)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Start the countdown when the page loads
window.onload = startCountdown;
