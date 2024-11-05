# Excel Glass Inc. - Frontend README

## Overview

This is the frontend for Excel Glass Inc., a glass etching company specializing in high-quality glass products and services. The application is built using React.js, Tailwind CSS, and Bootstrap, with a Node.js backend.

## Project Structure

- **public/index.html**: Main HTML file for the React application.
- **src/App.js**: Main component that sets up routing and includes the LandingPage component.
- **src/components/LandingPage.js**: Displays information about Excel Glass, Inc.
- **src/index.css**: Global styles including Tailwind CSS and Bootstrap.
- **src/index.js**: Entry point for the React application.

## Step-by-Step Installation Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Backend Directory**:
   ```
   cd excel-glass-inc/backend
   ```

3. **Install Backend Dependencies**:
   ```
   npm install
   ```

4. **Create a `.env` File** (if needed for environment variables).

5. **Start the Backend Server**:
   ```
   npm start
   ```

6. **Navigate to the Frontend Directory**:
   ```
   cd ../frontend
   ```

7. **Install Frontend Dependencies**:
   ```
   npm install
   ```

8. **Configure Tailwind CSS**:
   - Follow the Tailwind CSS installation guide to set up PostCSS if needed.

9. **Start the Frontend Development Server**:
   ```
   npm start
   ```

10. **Build the Frontend for Production**:
    ```
    npm run build
    ```

11. **Deploy to GitHub Pages**:
    - Install the gh-pages package:
      ```
      npm install gh-pages --save-dev
      ```
    - Add the following to your `package.json`:
      ```json
      "homepage": "https://<username>.github.io/<repository-name>"
      ```
    - Add deployment scripts:
      ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
      ```
    - Deploy:
      ```
      npm run deploy
      ```

### Note
Replace `<repository-url>` and `<username>/<repository-name>` with your actual GitHub repository details.