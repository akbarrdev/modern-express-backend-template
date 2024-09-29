# Modern Express Backend Starter

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-A86454?style=for-the-badge&logo=pug&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

A modern, robust, and scalable backend server starter kit built with Node.js, Express, TypeScript, and Pug. This project provides a solid foundation for building powerful web applications with a clean architecture and best practices.

## 🚀 Features

- **TypeScript**: Strongly typed language for better developer experience and fewer runtime errors
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **Pug**: High-performance template engine for server-side rendering
- **OOP Architecture**: Organized codebase using Object-Oriented Programming principles
- **Modular Structure**: Well-structured project layout for easy maintenance and scalability
- **Error Handling**: Centralized error handling middleware
- **Environment Configuration**: Easy configuration management for different environments
- **Logging**: Built-in logging using Morgan
- **Static File Serving**: Serve static files efficiently
- **CORS Support**: Cross-Origin Resource Sharing enabled
- **Testing Ready**: Set up with Jest for unit and integration testing
- **Code Style**: Enforced code style with ESLint and Prettier
- **Hot Reloading**: Fast development with Nodemon

## 📦 Prerequisites

- Node.js (v14 or later)
- pnpm

## 🛠️ Installation

1. Clone the repository:
   ```
   git clone https://github.com/akbarrdev/modern-express-backend-template.git
   cd modern-express-backend-starter
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.

## 🚀 Usage

### Development

Run the server in development mode with hot reloading:
```
pnpm run dev
```

### Production

Build the application for production:
```
pnpm run build
```

Start the server in production mode:
```
pnpm run start
```

## 📁 Project Structure

```
src/
├── config/ # Configuration files
├── controllers/ # Request handlers
├── middlewares/ # Custom middleware
├── models/ # Data models
├── routes/ # Route definitions
├── services/ # Business logic
├── views/ # Pug templates
├── app.ts # Express app setup
└── index.ts # Entry point
```


## 🛣️ API Routes

- `GET /`: Home page
- `GET /users`: Get all users

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 👨‍💻 Author

**Akbarrdev**

- Instagram: [@4kkbar](https://instagram.com/4kkbar)

---
