// --- THE CONTROL PANEL ---

// 1. Set the arrival date and time
export const TARGET_DATE = new Date("2025-09-27T18:00:00"); // Saturday at 6:00 PM

// 2. Define the daily messages
export const MESSAGES = {
    // Message for 3 or more days away
    day_3_plus: "Mission: Patiently await the final instructions. ✨",
    // Message for Day 2
    day_2: "Mission: Prepare the welcome snacks. 🍪",
    // Message for Day 1 (the final day)
    day_1: "Mission: The final countdown begins. Get ready! 🚀"
};

// 3. Define the background images for each day
export const BACKGROUNDS = {
    day_3_plus: "assets/images/departure-city.jpg",
    day_2: "assets/images/departure-city.jpg",
    day_1: "assets/images/road.jpg",
    // The background for arrival day
    arrival_day: "assets/images/arrival-city.jpg"
};