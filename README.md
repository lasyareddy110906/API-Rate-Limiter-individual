# API Rate Limiter

A full-stack backend infrastructure project demonstrating multiple API rate limiting algorithms using Node.js, Express, React, and Redis concepts.

This project simulates real-world API traffic control systems used in scalable backend architectures and cloud services.

---

# Features

* Fixed Window Rate Limiting
* Sliding Window Rate Limiting
* Token Bucket Algorithm
* Leaky Bucket Algorithm
* Redis Distributed Limiter Simulation
* Interactive API Testing Playground
* Real-time Request Counters
* HTTP 429 Error Handling
* Frontend-Backend Integration
* Responsive Modern UI
* Color Coordinated Algorithm Pages
* Deployment Ready Architecture

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

## Backend

* Node.js
* Express.js
* CORS
* dotenv

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# Project Structure

```text
API-Rate-Limiter/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── FixedWindow.jsx
│   │   │   ├── SlidingWindow.jsx
│   │   │   ├── TokenBucket.jsx
│   │   │   ├── LeakyBucket.jsx
│   │   │   ├── RedisLimiter.jsx
│   │   │   └── Playground.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Algorithms Implemented

## 1. Fixed Window

Counts requests within a fixed time interval.

Example:

* Max 5 requests per minute
* 6th request returns HTTP 429

---

## 2. Sliding Window

Tracks requests dynamically over rolling time windows for smoother traffic control.

---

## 3. Token Bucket

Allows burst traffic using refillable tokens.

Each request consumes one token.

---

## 4. Leaky Bucket

Processes requests at a constant rate to smooth traffic spikes.

---

## 5. Redis Distributed Limiter

Simulates distributed rate limiting using centralized request tracking.

---

# Installation

## Clone Repository

```bash
git clone <your-github-repo-url>
cd API-Rate-Limiter
```

---

# Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
PORT=9000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

## Start Backend

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:9000
```

---

# Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
VITE_API_URL=http://localhost:9000
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Fixed Window

```text
GET /api/fixed-window
```

## Sliding Window

```text
GET /api/sliding-window
```

## Token Bucket

```text
GET /api/token-bucket
```

## Leaky Bucket

```text
GET /api/leaky-bucket
```

## Redis Limiter

```text
GET /api/redis-limiter
```

---

# Playground Functionality

Each algorithm page:

* tracks requests
* displays request counters
* sends API requests
* navigates to playground when limit exceeds
* displays backend JSON response

Example HTTP 429 Response:

```json
{
  "success": false,
  "algorithm": "Fixed Window",
  "error": "Rate Limit Exceeded",
  "limit": 5,
  "message": "Too many requests. Try again later."
}
```

---

# Deployment

## Frontend Deployment (Vercel)

1. Push frontend to GitHub
2. Import project into Vercel
3. Set environment variable:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

4. Deploy

---

## Backend Deployment (Render)

1. Push backend to GitHub
2. Create new Web Service on Render
3. Set environment variables:

```env
PORT=9000
CLIENT_URL=https://your-vercel-url.vercel.app
NODE_ENV=production
```

4. Deploy

---

# Environment Variables

## Backend

```env
PORT=
CLIENT_URL=
NODE_ENV=
```

## Frontend

```env
VITE_API_URL=
```

---

# Future Improvements

* Real Redis Integration
* Authentication System
* API Keys
* Request Analytics Dashboard
* Rate Limiting Middleware
* Database Logging
* Docker Support
* Kubernetes Scaling
* WebSocket Monitoring

---

# Learning Outcomes

This project demonstrates:

* Backend Infrastructure Design
* API Protection Mechanisms
* Rate Limiting Algorithms
* Frontend-Backend Communication
* Deployment Architecture
* Production API Handling
* HTTP Status Management
* React State Management
* Express API Development

---

# Author

Lasya Kandadi

---

# License

This project is for educational and internship demonstration purposes.
