# Portfolio

This repository contains the source code for my personal portfolio website. The project has been updated to use React for enhanced modularity, maintainability, and scalability.

## Project Overview

The portfolio showcases my skills, projects, and contact information. By transitioning to a React-based architecture, the project benefits from a component-based structure, making it easier to manage and update.

## Features

- **Responsive Navbar**: A hamburger menu that toggles the navigation links for smaller screens.
- **Skills Section**: Displays my skills with visual indicators of proficiency levels.
- **Download CV**: Links to download my CV in English and Polish.
- **Social Links**: Buttons linking to my social media profiles.

## Why React?

React was chosen for this project due to its several advantages:
- **Component-Based Architecture**: Simplifies the creation of reusable UI components.
- **State Management**: Efficient handling of dynamic data and UI states.
- **Virtual DOM**: Improves performance by minimizing direct DOM manipulation.
- **Developer Tools**: Enhances debugging and development workflow with powerful tools.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pkasprzak9/portfolio.git
   cd portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the website.

## Project Structure

- `public`: Contains the HTML file and static assets.
- `src/components`: Contains React components such as `Navbar`, `SkillsSection`, `DownloadCVSection`, and `SocialLinksSection`.
- `src/App.js`: Main application file that renders the components.
- `src/index.js`: Entry point for the React application.

