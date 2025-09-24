import { TARGET_DATE, MESSAGES, BACKGROUNDS } from './config.js';
import { updateTimerDisplay, updateDailyDisplay, showArrivalState } from './ui.js';

let currentBackground = '';
let countdownInterval; // THE FIX: Declare the variable here

const justTheDate = new Date(TARGET_DATE.toISOString().slice(0, 10) + 'T00:00:00');

function runCountdown() {
    const now = new Date();
    const timeRemaining = TARGET_DATE - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval); // Now this works correctly
        showArrivalState();
        return;
    }

    // --- Time Calculation ---
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const timeString = `${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    updateTimerDisplay(timeString);

    const daysLeft = Math.floor((justTheDate - now)/ (1000 * 60 * 60 * 24));

    // --- Background & Message Logic ---
    let message, background;
    const isArrivalDay = now.toISOString().slice(0, 10) === TARGET_DATE.toISOString().slice(0, 10);

    if (isArrivalDay) {
        message = MESSAGES.arrival_day;
        background = BACKGROUNDS.arrival_day;
    } else if (daysLeft === 0) {
        message = MESSAGES.day_1;
        background = BACKGROUNDS.day_1;
    } else if (daysLeft === 1) {
        message = MESSAGES.day_2;
        background = BACKGROUNDS.day_2;
    } else {
        message = MESSAGES.day_3_plus;
        background = BACKGROUNDS.day_3_plus;
    }
    
    if (background !== currentBackground) {
        currentBackground = background;
        updateDailyDisplay(message, background);
    }
}

// --- Run the code ---
runCountdown();
countdownInterval = setInterval(runCountdown, 1000); // THE FIX: Assign the value, don't re-declare