# BookSearchEngine

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)

This is a full-stack web application for managing your bookshelf. It allows users to search for books, save them to their profile, and remove books from their collection. The application uses GraphQL for the server and Apollo Client for managing state on the front end.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Server](#server)
- [Client](#client)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Front End:**
  - React
  - Apollo Client
  - React Router

- **Back End:**
  - Node.js
  - Express.js
  - GraphQL
  - Apollo Server
  - Mongoose (MongoDB)

- **Authentication:**
  - JSON Web Tokens (JWT)

## Features

- User authentication (signup, login, logout)
- Search for books using the Google Books API
- Save books to your profile
- Remove books from your profile

## Getting Started

To run this application on your local machine, follow the instructions below.

### Server

1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root of the `server` directory with the following content:

   ``
   MONGODB_URI= your_mongodb_uri
   JWT_SECRET= your_secret_key
   ``

   Replace `your_mongodb_uri` with your MongoDB connection string and `your_secret_key` with a secure, random key for JWT.

4. Start the server: `npm start`
5. The server will be running at `http://localhost:3001/graphql`

### Client

1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Start the client: `npm start`
4. The client will be running at `http://localhost:3000`

### Contributing
Contributions are welcome! Feel free to open issues and pull requests.

### License
This project is licensed under the `MIT License`.


