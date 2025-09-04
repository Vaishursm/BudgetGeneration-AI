# Budget Generation AI

This is a desktop application for generating budgets for projects. It is built with Electron, React, and Node.js.

## Project Structure

The project is divided into three main parts:

-   `frontend`: A React application built with Vite that provides the user interface.
-   `backend`: A Node.js application built with Express that provides the API and interacts with the database.
-   `my-electron-app`: The Electron application that wraps the frontend and backend.

## Getting Started

### Prerequisites

-   Node.js and npm

### Installation and Running

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/budget-generation-ai.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd budget-generation-ai
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the application:
    ```bash
    npm start
    ```
    This will start the backend server, the frontend development server, and the Electron application.

## Building the Application

To build the application for distribution, run the following command:

```bash
npm run dist
```

This will create a distributable file in the `dist` directory.

## Tech Stack

-   **Frontend:**
    -   React
    -   Vite
    -   Ant Design
    -   Axios
    -   React Router
-   **Backend:**
    -   Node.js
    -   Express
    -   Sequelize
    -   SQLite
    -   ExcelJS
-   **Desktop:**
    -   Electron

## Database

The application uses a SQLite database to store project data. The database file is located at `backend/projects.db`.

## API

The backend provides a RESTful API for the frontend to interact with. The API is located at `http://localhost:5000/api`.
