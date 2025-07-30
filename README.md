# REACTGRAM

REACTGRAM is a simplified social media application inspired by Instagram, built with **React** for both the frontend and backend. It uses **MongoDB Atlas** (cloud.mongodb.com) as the database. This project The project is organized into two separate folders:

- `frontend/` – React-based client application
- `backend/` – React-based server API with MongoDB integration

---

## 📁 Project Structure

```.
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env.example
│   ├── .gitignore
│   ├── app.jsx
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/reactgram.git
cd reactgram
```

---

## ⚙️ Backend Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account ([cloud.mongodb.com](https://cloud.mongodb.com))

### Steps

```bash
cd backend
cp .env.example .env
```

Now, open the `.env` file and fill in your **MongoDB connection URI**, **database name**, and any required credentials.

Then, install dependencies and start the server:

```bash
npm install
npm start
```

> The backend should now be running (usually on `http://localhost:5000` or the configured port).

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

> The frontend should be accessible at `http://localhost:3000` by default.

Make sure the backend is running before using the frontend, so API requests function correctly.

---

## 🌐 Environment Variables

### Backend `.env` file

You must create a `.env` file in the `backend` folder based on the `.env.example` provided. Example variables you may need to fill in:

```env
MONGO_URI=your_mongo_connection_string
DB_NAME=your_database_name
PORT=5000
```

---

## 📦 Tech Stack

- **Frontend:** React
- **Backend:** React
- **Database:** MongoDB Atlas

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📚 About This Project

This project was developed as part of the Udemy course:
"<a href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos">React do Zero a Maestria (c/ hooks, router, API, Projetos)</a>" by <a href="https://github.com/matheusbattisti">Matheus Battisti - Hora de Codar</a>.

It was built to practice concepts such as React hooks, routing, API integration, and fullstack development using MongoDB.