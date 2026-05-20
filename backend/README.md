# API Rate Limiter – Full Stack Internship Project Design

# Project Overview

A full stack web application that demonstrates multiple API rate limiting algorithms using a clean dashboard-based frontend and a modular backend architecture.

The project allows users to:

* Learn how different rate limiting algorithms work
* Test APIs with different request limits
* Visualize request counts and blocked requests
* Compare algorithm behaviors
* Monitor traffic statistics
* Simulate distributed rate limiting using Redis

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Chart.js / Recharts

## Backend

* Node.js
* Express.js
* Redis
* REST APIs
* Middleware Architecture

---

# Frontend Design

# Frontend Folder Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── RequestChart.jsx
│   │   ├── Footer.jsx
│   │   └── AlgorithmCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── FixedWindow.jsx
│   │   ├── SlidingWindow.jsx
│   │   ├── TokenBucket.jsx
│   │   ├── LeakyBucket.jsx
│   │   ├── RedisLimiter.jsx
│   │   ├── Analytics.jsx
│   │   ├── APIPlayground.jsx
│   │   └── About.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# Frontend Pages

# 1. Home Page

## Purpose

Landing page introducing the project.

## Sections

* Hero section
* Project overview
* Features section
* Algorithms supported
* Architecture diagram
* CTA buttons

## UI Elements

* Gradient hero section
* Cards for algorithms
* Animated counters
* Modern navbar

---

# 2. Dashboard Page

## Purpose

Main monitoring dashboard.

## Features

* Total requests
* Allowed requests
* Blocked requests
* Active algorithm
* Redis status
* Traffic graph
* Recent request logs

## Components

* Stat cards
* Bar chart
* Line graph
* Activity table

---

# 3. Fixed Window Page

## Purpose

Demonstrate Fixed Window algorithm.

## Features

* Algorithm explanation
* Flow diagram
* API testing button
* Request counter
* Remaining requests
* Time reset display

## API

```text
GET /fixed-window
```

---

# 4. Sliding Window Page

## Purpose

Demonstrate Sliding Window algorithm.

## Features

* Real-time timestamp tracking
* Dynamic request filtering
* Sliding graph visualization

## API

```text
GET /sliding-window
```

---

# 5. Token Bucket Page

## Purpose

Demonstrate Token Bucket algorithm.

## Features

* Bucket visualization
* Token refill animation
* Burst request handling
* Live token count

## API

```text
GET /token-bucket
```

---

# 6. Leaky Bucket Page

## Purpose

Demonstrate Leaky Bucket algorithm.

## Features

* Water flow animation
* Queue visualization
* Constant request processing

## API

```text
GET /leaky-bucket
```

---

# 7. Redis Distributed Limiter Page

## Purpose

Demonstrate distributed rate limiting.

## Features

* Redis connection status
* Shared request counters
* Multi-server simulation
* Redis architecture visualization

## API

```text
GET /redis-limiter
```

---

# 8. Analytics Page

## Purpose

Monitor request analytics.

## Features

* Traffic analysis
* Success vs blocked requests
* Algorithm comparison
* Peak traffic chart
* Requests per minute graph

---

# 9. API Playground Page

## Purpose

Allow users to test APIs manually.

## Features

* Select algorithm
* Send API requests
* View live response
* View status code
* View response headers

## Display

* 200 Success
* 429 Too Many Requests
* Rate limit headers

---

# 10. About Page

## Purpose

Explain project architecture.

## Sections

* System architecture
* Backend workflow
* Redis integration
* Middleware explanation
* Future improvements

---

# Frontend Navigation Bar

The navbar should appear on ALL pages.

## Navbar Links

* Home
* Dashboard
* Fixed Window
* Sliding Window
* Token Bucket
* Leaky Bucket
* Redis Limiter
* Analytics
* API Playground
* About

## Navbar Features

* Responsive design
* Mobile menu
* Active route highlighting
* Sticky navigation

---

# Frontend UI Design Guidelines

## Color Theme

* Dark background
* Blue gradients
* White cards
* Accent colors for charts

## Styling

* Rounded cards
* Soft shadows
* Responsive grid layouts
* Smooth hover effects
* Animated charts

## Suggested Layout

```text
Navbar
Sidebar
Main Content Area
Footer
```

---

