# Freelance Server (Fiverr Clone Backend)

This is the backend server for a freelance marketplace platform, similar to Fiverr. It handles user authentication, gig creation, and messaging between freelancers and clients.

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- 🧑‍💻 Role-based access (Freelancer & Client)
- 🎯 CRUD operations for Gigs
- 💬 Messaging between users
- 🌐 MongoDB Atlas integration
- 🔐 Environment variable support using `.env`

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Dotenv
- CORS

## 📁 Folder Structure

freelance-server/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── package.json
├── server.js

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

# 📦 Installation
git clone https://github.com/nandhutee/freelance-server.git
cd freelance-server
npm install

# 🔑 Running the Server
npm run dev

Server will run on http://localhost:5000
# 🧪 Sample API Routes

## Auth Routes
POST /api/auth/register

POST /api/auth/login

## Gig Routes
POST /api/gigs (protected)

GET /api/gigs

GET /api/gigs/:id

PUT /api/gigs/:id (protected)

DELETE /api/gigs/:id (protected)

## Message Routes
POST /api/messages/:senderId/:receiverId

GET /api/messages/:senderId/:receiverId






