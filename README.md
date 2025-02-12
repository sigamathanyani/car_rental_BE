## Car Rental Web Application

# Overview

The Car Rental Web Application is a backend service built using Node.js, Express, and MySQL. It provides APIs for user authentication, car management, booking handling, and payment processing. The application ensures secure and efficient handling of car rental operations, with role-based access control for administrators and users.

# Features

- User authentication (sign-up, login, logout)

- CRUD operations for cars

- Booking and reservation management

- Payment processing integration

- Admin dashboard APIs for managing users, cars, and bookings

- Secure API with JWT authentication

# Tech Stack

- Backend

- Node.js

- Express.js

- MySQL

- Sequelize ORM

- JWT Authentication

# Installation

Prerequisites

Ensure you have the following installed:

Node.js

MySQL

Git

## Steps to Set Up

# Clone the repository:

git clone https://github.com/yourusername/car-rental-api.git
cd car-rental-api

# Install dependencies:

npm install

# Set up environment variables:

Create a .env file in the project root

# Add database credentials, API keys, and secret keys:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=car_rental
JWT_SECRET=your_secret_key

# Set up the database:

npx sequelize db:migrate

# Start the application:

npm start

# API will be available at:

http://localhost:3000

# How to Run the Backend

Ensure MySQL is running and properly configured with the credentials specified in .env.

# Navigate to the project directory:

cd car-rental-api

# Install dependencies (if not already installed):

npm install

# Run database migrations:

npx sequelize db:migrate

# Start the backend server:

npm start
