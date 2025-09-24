# Friend Countdown 🚀

A simple, beautiful, and modular countdown website to celebrate a friend's return. This project features a live timer, daily updating messages, and a celebratory finale with confetti when the countdown reaches zero.

## ✨ Features

* **Live Countdown Timer:** Displays the remaining time in a `DD : HH : MM : SS` format, updating every second.
* **Dynamic Daily Content:** The background image and "mission" message change automatically each day as the arrival gets closer.
* **Grand Finale:** When the timer hits zero, a "Welcome Back!" message appears, the background image comes into full focus, and confetti celebrates the arrival.
* **Fully Responsive:** Designed with a fluid layout that looks great on any device, from a small phone to a large desktop monitor.
* **Modular & Expandable:** Built with a clean file structure that makes it easy to customize or add new features in the future.

***

## 🚀 Live Demo

You can view the live version of this project here:

**[https://your-username.github.io/friend-countdown/](https://your-username.github.io/friend-countdown/)**

*(Note: Replace `your-username` and `friend-countdown` with your actual GitHub username and repository name.)*

***

## 🛠️ How to Use or Customize

This project is designed to be easily customized for your own countdown.

### 1. The Control Panel

All the main settings are in one place. To change the countdown, open this file:

**`src/js/modules/config.js`**

Inside, you can easily change:
* `TARGET_DATE`: Set your specific arrival date and time in UTC.
* `MESSAGES`: Write your own custom messages for each day.
* `BACKGROUNDS`: Point to your own background image files.

### 2. Replace the Images

Place your background images in the `assets/images/` folder. Make sure the file names match what you've specified in the `config.js` file. For the best results, use high-resolution images with a central focus.

### 3. Deploy to the Web

This project is ready to be deployed on any static hosting service. To deploy for free using GitHub Pages:
1.  Push your code to a public GitHub repository.
2.  Go to the repository's **Settings** tab.
3.  Navigate to the **Pages** section in the left sidebar.
4.  Under "Branch," select `main` and click **Save**.
5.  Your website will be live at the provided URL within a few minutes.

***

## 💻 Tech Stack

* **HTML5**
* **CSS3** (Flexbox, Custom Properties, Transitions)
* **JavaScript (ES6 Modules)**
* **Libraries:** [canvas-confetti](https://github.com/catdad/canvas-confetti) for the celebration effect.
