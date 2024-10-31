# langara_project

Movie Watchlist Application
Overview

The Movie Watchlist Application is a full-stack application that allows users to search for movies, store the retrieved data in a MongoDB database, and display movie information on a React-based front end. This project integrates Python for backend API interactions and React for the user interface, leveraging The Movie Database (TMDb) API for movie data.
Features

    Search for movies using TMDb API.
    Store movie details in a MongoDB database.
    Display movie information in a user-friendly interface.
    Responsive design with a video background.

Technologies Used

    Frontend: React, Firebase
    Backend: Python, Requests library
    Database: MongoDB (Firestore)
    APIs: The Movie Database (TMDb)

Installation
Prerequisites

    Node.js: Ensure you have Node.js installed on your machine.
    Python: Install Python for backend API interactions.
    MongoDB: Set up a MongoDB database (Firestore).

Steps to Install

    Clone the Repository

    bash

git clone https://github.com/yourusername/movie-watchlist.git
cd movie-watchlist

Install Frontend Dependencies

Navigate to the frontend directory and install the required packages:

bash

cd frontend
npm install

Set Up Backend

Install the required Python packages:

bash

pip install requests firebase-admin

Environment Variables

Create a .env file in the backend directory to store your TMDb API key and Firestore credentials.

Run the Application

    Start the backend server:

    bash

python your_backend_script.py

Start the frontend development server:

bash

        npm start

Usage

    Enter a movie title in the search field of the application.
    The application will fetch movie details from TMDb API and store them in Firestore.
    Movie information will be displayed on the front end.

Contributing

Contributions are welcome! If you’d like to contribute to the project, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature/YourFeature).
    Make your changes and commit them (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/YourFeature).
    Open a pull request.


For any questions or feedback, please reach out to Younes Ameziane
