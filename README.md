# MS Academy (Mind Sharper Academy) 🎓

A modern, fully responsive, and highly interactive frontend website for **MS Academy (Mind Sharper Academy)** – a premier English medium tuition center for students from Nursery to Class 10.

![MS Academy Overview](/images/children_hero.png)

## 🌟 Features
- **Dynamic Hero Section:** Engaging floating particles, emoji rain, and typing animations to keep children and parents interested.
- **Day/Night Theme Toggle:** A smart ☀️/🌙 toggle in the navigation bar to easily switch between a crisp Light Mode and a stunning Dark Mode. Let the learning continue comfortably, even at night!
- **Interactive UI Elements:** 
  - Smooth scroll reveal animations.
  - Hover tilt effects on cards.
  - Rainbow text and playful wobble animations on class cards.
- **Fully Working Contact Form:** Sends admission inquiries directly to the academy's email using [FormSubmit](https://formsubmit.co) without needing a backend server!
- **Mobile Responsive Design:** Flawless experience on desktops, tablets, and smartphones with an animated hamburger menu.

## 🛠️ Technologies Used
- **HTML5:** Semantic and robust page structure.
- **Vanilla CSS3:** Custom flexbox/grid layouts, CSS variables, keyframe animations, and micro-interactions (No CSS framework required!).
- **Vanilla JavaScript (ES6):** Intersection Observers for scroll animations, `localStorage` for theme preferences, `fetch` API for form submission, and custom particle generators.

## 📂 Project Structure
```
📁 MS Academy Website
├── index.html       # The main webpage containing all semantic sections
├── styles.css       # Complete design system, animations, and dark mode configuration
├── script.js        # Logic for UI interactions, theme toggle, and AJAX form submissions
├── images/          # Assets and placeholder images
└── README.md        # You are here!
```

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/dhee786/ms-academy-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ms-academy-website
   ```
3. Open `index.html` in your favorite browser. No build steps or local servers are strictly necessary, though a local server (like `Live Server` in VS Code) is recommended to test the AJAX form fully. 

## ✉️ Contact Form Setup
The contact form is pre-configured to send results directly to the academy's email without a backend.
1. Fill out the form and hit "Submit" for the first time.
2. An **Activation Email** will be sent to the configured address.
3. Click **Activate** in that email, and the form will be fully live. 

---
*Created with ❤️ for MS Academy. Shaping bright futures since 2023.*
