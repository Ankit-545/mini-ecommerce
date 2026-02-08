
```md
# Full Stack Assignment

A full-stack web application built using **React**, **Node.js**, **Express**, and **Docker**.  
The project demonstrates REST API integration, frontend state management, and a complete Dockerized setup using Docker Compose.

---

## 📌 Tech Stack

### Frontend
- React
- Context API (Cart Management)
- Nginx (Production build)

### Backend
- Node.js
- Express.js
- REST APIs
- Custom middleware (validation & error handling)

### DevOps
- Docker
- Docker Compose

---

## 📂 Project Structure

```

Assignment/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── data/
│   │   ├── app.js
│   │   └── server.js
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
├── .gitignore
└── README.md

````

---

## ✨ Features

- Product listing
- Add / remove items from cart
- Global cart state using Context API
- Backend APIs for products and cart
- Input validation and centralized error handling
- Fully Dockerized frontend and backend

---

## 🚀 Local Setup (Without Docker)

### Backend
```bash
cd Backend
npm install
npm start
````

Backend runs on:
`http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
`http://localhost:3000`

---

## 🐳 Docker Setup (Recommended)

### Build and Run Containers

From the project root directory:

```bash
docker-compose up --build
```

### Access the Application

| Service  | URL                                            |
| -------- | ---------------------------------------------- |
| Frontend | [http://localhost:3000](http://localhost:3000) |
| Backend  | [http://localhost:5000](http://localhost:5000) |

---

## 🔌 API Endpoints

### Products

```
GET /api/products
```

### Cart

```
POST /api/cart
```

---

## 🛡️ Error Handling

* Centralized error handling middleware
* Input validation for cart operations
* Proper HTTP status codes and messages

---
