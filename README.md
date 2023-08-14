# ReactJS Chat App

This is a simple chat application built using ReactJS for the frontend and Express.js with socket.io for the backend, following an MVC (Model-View-Controller) approach. It allows users to send chat messages in real-time, like messages, use emojis, and mention other users.

## Table of Contents
- [Basic Task](#basic-task)
- [Images](#images)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Author](#author)

## Basic Task
This chat app is a single-page application with the following features:

- A textbox for typing messages.
- A send button to send the chat message.
- Display of chat messages above the textbox.
- Each message is assigned a random username from a predefined list: ["Alan", "Bob", "Carol", "Dean", "Elin"].
- A like button for each message that, when clicked, increases the like count displayed next to the button.
- Fully Responsive for all the different screen sizes.
- Emoji options for chat messages.
- Mentions (@) feature that shows a list of users from the user list when '@' is clicked.
- WebSocket (socket.io) server implemented using Express.js for real-time communication between clients.

## Images

-Website Screen
![mobile (2)](https://github.com/itsAkash12/extraspace-assignment/assets/107500115/24dbb88c-236c-4c4c-af4f-2ee15639e6c4)

-Mobile Screen
![mobile (1)](https://github.com/itsAkash12/extraspace-assignment/assets/107500115/4074c60a-6bb3-4219-8da0-1a00a08656e8)


## Installation
1. Clone the repository: `git clone https://github.com/itsAkash12/extraspace-assignment`
2. Navigate to the frontend directory: `cd your-chat-app/frontend`
3. Install frontend dependencies: `npm install`
4. Navigate to the backend directory: `cd ../backend`
5. Install backend dependencies: `npm install`
6. Change the Link of frontend which is present in index.js to frontend localhostport.
7. Change the frontend/.env variable VITE_APP_URL to backend localhost port.

## Usage
1. Start the frontend development server: `cd frontend && npm start`
2. Start the backend server: `cd ../backend && npm start`
3. Open your web browser and go to the provided localhost port to use the chat app.
4. Type messages in the input box, click the send button to send messages, and click the like button to like messages.
5. For emoji options, use the provided interface.
6. For mentions, type '@' and a list of users will be displayed for selection.

## Features
- Real-time chat messaging.
- Random assignment of usernames.
- Like button for each message.
- Emoji support.
- Mentions feature.
- WebSocket server for real-time communication.

## Project Structure
- frontend/: Contains the ReactJS frontend code.
- backend/: Contains the Express.js backend code following the MVC pattern.

## Technologies Used
- ReactJS
- Express.js
- socket.io (for WebSocket communication, optional)


## Author
- Akash Kumar Singh
- GitHub: [itsAkash12](https://github.com/itsAkash12)

