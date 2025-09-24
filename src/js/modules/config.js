// --- THE CONTROL PANEL ---

// 1. Set the arrival date and time
export const TARGET_DATE = new Date("2025-09-27T09:00:00"); // Saturday at 9:00 AM

// 2. Define the daily messages
export const MESSAGES = {
    // Message for 3 or more days away
    day_3_plus: "Send 3 random relics of your life today.📷",
    // Message for Day 2
    day_2: "Find 2 things in your room that remind you of me.🤸‍♂️",
    // Message for Day 1 (the final day)
    day_1: "Give me 1 reason you're glad you have me.💌",
    // Message for last hours
    arrival_day: "only a few hours left! Can't wait to see you.⏳"
};

// 3. Define the background images for each day
export const BACKGROUNDS = {
    day_3_plus: "assets/images/departure-city.jpg",
    day_2: "assets/images/departure-city.jpg",
    day_1: "assets/images/road.jpg",
    // The background for arrival day
    arrival_day: "assets/images/arrival-city.jpeg"
};