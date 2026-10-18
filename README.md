📰 NewsHouse — News at a Glance

<p align="center">
  <strong>Stay informed. Stay ahead.</strong>
</p><p align="center">
  A responsive news browsing experience built with HTML, CSS, JavaScript, and Bootstrap, powered by the NewsAPI.
</p><p align="center">
  <a href="https://github.com/Amro-Fathi/News">
    <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github" alt="Source Code">
  </a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>---

✨ Overview

NewsHouse is a front-end news application that brings headlines from different categories into one organized, easy-to-navigate interface.

Built using vanilla JavaScript and the NewsAPI, the project focuses on API integration, dynamic content rendering, pagination, persistent user preferences, and responsive UI design.

🚀 Features

- 🌍 News Categories — Browse General, Business, Entertainment, Health, Science, Sports, and Technology news.
- 🔎 Search Functionality — Search for articles using keywords.
- 🗂️ Category Filtering — Filter headlines by your preferred news category.
- 📄 Dynamic Pagination — Navigate through article results, with 12 articles requested per page.
- 📰 Multiple Layouts — Switch between a responsive grid layout and a compact list view.
- 💾 Persistent Preferences — Remember the previously selected category using Local Storage.
- ⏱️ Relative Timestamps — Display publication times in a readable format, such as minutes or hours ago.
- ⭐ Featured Headlines — Highlight selected articles in a dedicated top-news section.
- 📱 Responsive Design — Adapt the interface to different screen sizes using Bootstrap and custom CSS.
- 🎬 CSS Animations — Add motion and visual polish to the news cards and interface.
- 🔗 Direct Article Access — Open the original article from its source.

🛠️ Tech Stack

Technology| Purpose
HTML5| Page structure and semantic markup
CSS3| Custom styling, layouts, and animations
JavaScript (ES6+)| Application logic, events, and dynamic rendering
Bootstrap| Responsive grid, navigation, and UI components
NewsAPI| Fetching news headlines and article data
Fetch API| Making asynchronous HTTP requests
Local Storage| Persisting the selected category
Font Awesome| Icons throughout the interface

🧠 What I Practiced

This project helped me develop practical experience with:

- Integrating a third-party REST API into a front-end application.
- Working with asynchronous JavaScript using "async/await" and "fetch()".
- Processing JSON responses and rendering data dynamically.
- Building reusable JavaScript functions for UI behavior.
- Implementing pagination based on API response metadata.
- Managing application state through DOM attributes and browser storage.
- Creating responsive interfaces with Bootstrap and custom CSS.
- Handling missing article images and optional API fields.
- Updating the interface without reloading the entire page.

📁 Project Structure

News/
├── css/
│   ├── all.min.css
│   ├── bootstrap.css
│   ├── font.css
│   ├── global.css
│   ├── index.css
│   ├── index.responsive.css
│   └── keyframes.css
├── images/
├── js/
│   ├── bootstrap.js
│   ├── functions.js
│   └── index.js
├── webfonts/
└── index.html

Key Files

- "index.html" — Defines the navigation, search controls, news section, and pagination container.
- "js/index.js" — Initializes the application, restores the saved category, and loads the initial data.
- "js/functions.js" — Handles API requests, article rendering, pagination, category selection, view switching, and relative timestamps.
- "css/global.css" — Contains shared styling and global design rules.
- "css/index.css" — Defines the main page layout and component styles.
- "css/index.responsive.css" — Contains responsive adjustments.
- "css/keyframes.css" — Defines CSS animations.

⚙️ Getting Started

This repository contains the source code only. There is no deployed live demo, so run the project on your own local development server.

1. Clone the Repository

git clone https://github.com/Amro-Fathi/News.git
cd News

2. Open the Project

Open the project folder in VS Code and run "index.html" using the Live Server extension.

Alternatively, if Python is installed:

python -m http.server 8000

Then visit:

http://localhost:8000

3. Configure NewsAPI

The application requests headlines from "NewsAPI" (https://newsapi.org/).

For your own setup:

1. Obtain an API key from NewsAPI.
2. Configure the API request in "js/functions.js".
3. Confirm that your API plan supports the endpoint and usage you need.

Security note: The current implementation places the API key directly in client-side JavaScript. Any key embedded in browser code can be viewed by visitors. For a public deployment, use a backend or serverless function to protect the key, and avoid committing private credentials to GitHub.

📌 Project Scope

NewsHouse is a front-end learning project focused on news retrieval and presentation. It does not currently include a dedicated backend, user authentication system, or database.

Article availability depends on the NewsAPI service, its plan restrictions, and API request limits.

👨‍💻 Author

Amr Fathi

- GitHub: "@Amro-Fathi" (https://github.com/Amro-Fathi)
- Repository: "Amro-Fathi/News" (https://github.com/Amro-Fathi/News)

---

<p align="center">
  <strong>Built to explore APIs, JavaScript, and better ways to present information.</strong>
</p>
