# Excel Glass Inc. Backend Documentation

## Overview
Excel Glass Inc. is a glass etching company specializing in high-quality glass etched products for individuals and businesses. Established in 1994, we are committed to exceptional customer service and craftsmanship.

## Project Structure
The backend of the Excel Glass Inc. project is built using Node.js and Express. Below is the structure of the backend:

```
backend/
├── src/
│   ├── app.js               # Entry point for the Node.js backend
│   ├── controllers/         # Contains request handling functions
│   │   └── index.js
│   ├── routes/              # Defines API routes
│   │   └── index.js
│   └── models/              # Data models for the application
│       └── index.js
├── package.json             # Metadata and dependencies
└── README.md                # Documentation for the backend
```

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

## API Usage
The backend provides various endpoints for interacting with the glass etching services. Refer to the `routes/index.js` file for detailed API routes and their functionalities.

## Contact Information
For inquiries regarding our glass etching services, please reach out to us through our website or contact us directly.

---

Replace `<repository-url>` with your actual GitHub repository URL.