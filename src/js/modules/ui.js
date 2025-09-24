// This module handles all updates to the DOM (the webpage)
import { BACKGROUNDS } from './config.js';
// Get all the elements we need to interact with
const elements = {
    countdown: document.getElementById('countdown'),
    messageCard: document.getElementById('message-card'),
    dailyMessage: document.getElementById('daily-message'),
    arrivalMessage: document.getElementById('arrival-message'),
    body: document.body
};

/**
 * Updates the countdown timer display.
 * @param {string} timeString - The formatted time string (e.g., "03 : 12 : 45 : 09").
 */
export function updateTimerDisplay(timeString) {
    elements.countdown.textContent = timeString;
}

/**
 * Updates the daily message and the background image.
 * @param {string} message - The message to display.
 * @param {string} backgroundUrl - The URL of the background image.
 */
export function updateDailyDisplay(message, backgroundUrl) {
    elements.dailyMessage.textContent = message;
    // Only change the background if it's different from the current one
    if (elements.body.style.backgroundImage !== `url("${backgroundUrl}")`) {
        elements.body.style.backgroundImage = `url('${backgroundUrl}')`;
    }
}

export function showArrivalState() {
    // THE FIX: Explicitly set the final background image to make it permanent
    elements.body.style.backgroundImage = `url('${BACKGROUNDS.arrival_day}')`;
    
    // --- The rest of the function remains the same ---
    elements.countdown.style.display = 'none';
    elements.messageCard.style.display = 'none';
    elements.arrivalMessage.style.display = 'block';

    // Trigger the "reveal" effect on the background
    elements.body.classList.add('is-revealed');

    // Trigger confetti
    confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
    });
}