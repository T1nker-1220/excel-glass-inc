# Excel Glass Inc. - Glass Etching Company

Welcome to the Excel Glass Inc. project! This repository contains the code for the website of Excel Glass, Inc., a glass etching company specializing in high-quality glass products for both individuals and businesses since 1994.

## Company Overview

- **Name**: Excel Glass, Inc.
- **Established**: 1994
- **Location**: Malibay City, Philippines
- **Employees**: 15
- **Factory Size**: 240 sqm
- **Services Offered**:
  - Glass etched products
  - Awards
  - Corporate giveaways
  - Glass mirrors

Excel Glass, Inc. is committed to providing high-quality products and exceptional customer service. We welcome all individuals and organizations to contact us for their glass etching needs.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

- **Entry Point**: `backend/src/app.js`
- **Controllers**: `backend/src/controllers/index.js`
- **Routes**: `backend/src/routes/index.js`
- **Models**: `backend/src/models/index.js`
- **Package File**: `backend/package.json`
- **Documentation**: `backend/README.md`

### Frontend

- **Main HTML File**: `frontend/public/index.html`
- **Main Component**: `frontend/src/App.js`
- **Landing Page Component**: `frontend/src/components/LandingPage.js`
- **Global Styles**: `frontend/src/index.css`
- **Entry Point**: `frontend/src/index.js`
- **Package File**: `frontend/package.json`
- **Tailwind Configuration**: `frontend/tailwind.config.js`

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