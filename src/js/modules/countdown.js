import { TARGET_DATE, MESSAGES, BACKGROUNDS } from './config.js';
import { updateTimerDisplay, updateDailyDisplay, showArrivalState } from './ui.js';

// We'll use this to track the current background to prevent unnecessary updates
let currentBackground = '';

function runCountdown() {
    const now = new Date();
    const timeRemaining = TARGET_DATE - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        showArrivalState();
        return;
    }

    // --- Time Calculation (remains the same) ---
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const timeString = `${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    updateTimerDisplay(timeString);

    // --- New, Smarter Background & Message Logic ---
    let message, background;
    
    // THE FIX: Check if the current calendar date matches the arrival calendar date
    const isArrivalDay = now.toISOString().slice(0, 10) === TARGET_DATE.toISOString().slice(0, 10);

    if (isArrivalDay) {
        console.log("yayyy");
        // If it's the arrival day (e.g., any time on Saturday)
        message = MESSAGES.day_1;
        background = BACKGROUNDS.arrival_day;
    } else if (days === 1) {
        // If there's 1 full day left (e.g., any time on Friday)
        message = MESSAGES.day_2;
        background = BACKGROUNDS.road;
    } else {
        // If there are 2 or more days left
        message = MESSAGES.day_3_plus;
        background = BACKGROUNDS.day_3_plus;
    }
    
    // To be efficient, only update the display if the background needs to change
    if (background !== currentBackground) {
        currentBackground = background;
        updateDailyDisplay(message, background);
    }
}


// --- The rest of the file (initial run and interval) stays the same ---
// We removed the initial background setting logic as it's now handled in the main function
runCountdown();
const countdownInterval = setInterval(runCountdown, 1000);