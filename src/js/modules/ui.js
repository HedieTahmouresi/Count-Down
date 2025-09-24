// This module handles all updates to the DOM (the webpage)

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

/**
 * Triggers the final arrival state.
 */
export function showArrivalState() {
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