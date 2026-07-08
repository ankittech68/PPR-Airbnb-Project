# 🏠 Private Property Rental Platform (Airbnb Clone)

A modern Airbnb-inspired rental platform built using React.js that allows users to explore rental properties, browse categories, and list their own homes after authentication.

---

## 🌐 Live Demo

🔗 Add Vercel Link Here

---

## 📖 Project Overview

The Private Property Rental Platform is a responsive web application inspired by Airbnb. It enables users to browse rental properties, explore different categories, create accounts, login securely, and list their own properties.

The project focuses on implementing modern React concepts such as:

- Component-based architecture
- React Router navigation
- Protected routes
- Context API state management
- Authentication flow
- Responsive UI Design

---

## ✨ Key Features

### 👤 Authentication System
- User Signup
- User Login
- Logout Functionality
- Credential Validation
- Protected Routes

### 🏡 Property Management
- Browse Properties
- Explore Categories
- List Your Home
- Property Details

### 🎨 User Experience
- Responsive Design
- Modern Airbnb Inspired UI
- Mobile Friendly Layout
- Smooth Navigation

---

## 🏗 System Architecture

```text
+--------------------+
|      User          |
+---------+----------+
          |
          v
+--------------------+
|   React Frontend   |
|  (Vite + React)    |
+---------+----------+
          |
          v
+--------------------+
| React Router DOM   |
+---------+----------+
          |
          v
+--------------------+
| Authentication     |
| (Context API)      |
+---------+----------+
          |
          v
+--------------------+
| Protected Routes   |
+--------------------+
```

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS3

### Routing
- React Router DOM

### Icons
- React Icons

### State Management
- Context API

### Deployment
- Vercel

---

## 📂 Project Structure

```text
src/
│
├── Component/
│   ├── Navbar/
│   ├── Footer/
│   ├── Home/
│   ├── Login/
│   ├── Signup/
│   ├── Listing/
│   └── Contact/
│
├── Context/
│   └── UserContext.jsx
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔐 Authentication Workflow

```text
User
 │
 ▼
Signup
 │
 ▼
Credentials Stored
 │
 ▼
Login
 │
 ▼
Authentication Success
 │
 ▼
Access Protected Routes
 │
 ▼
List Property
```

---

## 🚀 Installation

Clone Repository

```bash
git clone https://github.com/ankittech68/PPR-Airbnb-Project.git
```

Navigate to Project

```bash
cd PPR-Airbnb-Project
```

Install Dependencies

```bash
npm install
```

Start Development Server

```bash
npm run dev
```

Production Build

```bash
npm run build
```

---

## 📸 Screenshots

### Home Page

Add Screenshot

### Login Page

Add Screenshot

### Signup Page

Add Screenshot

### Listing Page

Add Screenshot

---

## 🔒 Protected Route Logic

The "List Your Home" page is protected.

If the user is:

✅ Logged In → Access Granted

❌ Not Logged In → Redirected to Login Page

---

## 🎯 Learning Outcomes

- React Component Architecture
- Context API
- Protected Routing
- State Management
- Responsive Design
- React Router DOM
- Git & GitHub Workflow
- Vercel Deployment

---

## 🚀 Future Enhancements

- Backend Integration
- JWT Authentication
- MongoDB Database
- Property Search
- Booking System
- Wishlist Feature
- Payment Gateway
- Admin Dashboard

---

## 👨‍💻 Author

**Ankit**

B.Tech CSE | Lovely Professional University

GitHub:
https://github.com/ankittech68

LinkedIn:
(Add LinkedIn Profile)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
