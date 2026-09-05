# 📰 Articles API

**Articles API** is a RESTful backend application built with Node.js, Express.js, and MongoDB. It provides user authentication, profile and article management, as well as functionality for saving and managing bookmarked articles.

## 🚀 Features

- User registration and authentication
- User logout
- Token-based authentication and authorization
- Session management and session refresh
- User profile and avatar management
- Full CRUD operations for articles
- Adding and removing articles from the saved list
- Article pagination, filtering, and sorting
- Article category management
- Input data validation
- Centralized error handling
- Configured CORS
- MongoDB integration with Mongoose
- Interactive API documentation with Swagger

## 🛠 Tech Stack

| Technology            | Purpose                           |
| :-------------------- | :----------------------------     |
| **Node.js**           | Backend runtime environment       |
| **Express.js**        | Web framework for building the API|
| **MongoDB**           | NoSQL database                    |
| **Mongoose**          | MongoDB object modeling           |
| **JWT**               | User authentication               |
| **bcrypt**            | Password hashing                  |
| **Joi**               | Request validation                |
| **Swagger (OpenAPI)** | API documentation                 |
| **cookie-parser**     | Cookie handling                   |
| **dotenv**            | Environment variable management   |

## 📖 API Documentation

Full API documentation is available through [Swagger UI](https://fs-125-7-back.onrender.com/api-docs/).

## 🔐 Authentication

- The API uses tokens to authenticate users.
- Protected routes are accessible only to authenticated users.
- User sessions can be refreshed using a refresh token.
- Authentication and access control are implemented through middleware.
- Cookies are used to manage sessions and authentication tokens

## 🌐 API

The backend is deployed and available at:

https://fs-125-7-back.onrender.com
