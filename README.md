# User Authentication System

This is a **User Authentication System** built with **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**. The project allows users to create an account, log in, and log out, with their data securely stored and managed.

## Features:
- **User Registration**: Users can create an account by providing a username, email, password, and age.
- **Login**: Secure login functionality with **JWT (JSON Web Tokens)** for managing sessions.
- **Logout**: Allows users to log out and terminate their session.

## Technologies Used:
- **Node.js**: Backend JavaScript runtime.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Bcrypt.js**: Password hashing to securely store user passwords.
- **JWT**: Used for handling session management and creating authentication tokens.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and attractive UIs.

## How It Works:
1. **Password Hashing**: **Bcrypt.js** is used to securely hash passwords before storing them in MongoDB.
2. **JWT for Session Management**: **JWT tokens** are generated upon login and stored as cookies, ensuring secure access to protected routes.
3. **Responsive UI**: **Tailwind CSS** is used to design a clean, responsive interface that looks great on all devices.

## How to Use:
1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Set up a MongoDB database (locally or using a cloud service like MongoDB Atlas).
4. Run the app with `npm start`.

