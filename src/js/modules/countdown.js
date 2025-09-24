import { TARGET_DATE, MESSAGES, BACKGROUNDS } from './config.js';
import { updateTimerDisplay, updateDailyDisplay, showArrivalState } from './ui.js';

let currentDay = -1; // Used to check if the day has changed

function runCountdown() {
    const now = new Date().getTime();
    const timeRemaining = TARGET_DATE - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        showArrivalState();
        return;
    }

    // Calculate time components
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Format for display
    const timeString = `${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    updateTimerDisplay(timeString);
    
    // Check if the day has changed to update the message and background
    if (days !== currentDay) {
        currentDay = days;
        let message, background;

        if (days >= 2) { // Day 3+
            message = MESSAGES.day_3_plus;
            background = BACKGROUNDS.day_3_plus;
        } else if (days === 1) { // Day 2
            message = MESSAGES.day_2;
            background = BACKGROUNDS.day_2;
        } else if (days === 0) { // Day 1
            message = MESSAGES.day_1;
            background = BACKGROUNDS.day_1;
        }
        
        // Update the display for the current day
        updateDailyDisplay(message, background);
    }
}

// Set the initial background for arrival day before the countdown starts if needed
if (new Date().getTime() > TARGET_DATE - (24 * 60 * 60 * 1000)) {
     document.body.style.backgroundImage = `url('${BACKGROUNDS.arrival_day}')`;
}

// Run the countdown immediately and then every second
runCountdown();
const countdownInterval = setInterval(runCountdown, 1000);