# NewsHub

## 📌 Project Overview
 A responsive web application that aggregates and displays the latest news articles from variouscategories such as technology, sports, entertainment, and business. It leverages a news API to fetch real-time updates and presents them in a clean, categorized format. Includes a commenting feature to foster an interactiveenvironment for discussion.

## 🚀 Features
- 🔐 **User Authentication**  
  Secure user registration and login with JWT-based authentication.

- 📰 **News Feed API**  
  Serve news articles from the database to the frontend.

- 💬 **Comment System**  
  Users can post comments on news articles.

- 🗑️ **Comment Management**  
  Users can delete their own comments.

- 🔒 **Protected Routes**  
  Certain routes are secured using middleware authentication.

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing users and pins)
- **Other Libraries**: Axios, bcryptjs, etc.


## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Frontend
```sh
npm run dev
```

### 4️⃣ Start the Backend (if applicable)
```sh
cd backend
npm install
npm start
```

## 🌍 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint       | Description                                         |
|--------|----------------|-----------------------------------------------------|
| POST   | `/api/signup`  | Register a new user                                 |
| POST   | `/api/login`   | Log in an existing user and receive a JWT token     |

---

### 📰 News Routes

| Method | Endpoint             | Description                                          |
|--------|----------------------|------------------------------------------------------|
| GET    | `/api/home`          | Fetch all news articles from the database            |
| GET    | `/api/home/:newsId`  | Get a specific news article and its associated comments |

---

### 💬 Comment Routes

| Method | Endpoint                          | Description                                             |
|--------|-----------------------------------|---------------------------------------------------------|
| POST   | `/api/addComment/:newsId`         | Add a comment to a specific news article *(Requires Auth)* |
| DELETE | `/api/deleteComment/:commentId`   | Delete a comment *(Requires Auth)*                      |

