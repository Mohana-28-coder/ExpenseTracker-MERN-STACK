# 💰 ExpenseTracker-MERN-STACK

A full-stack Expense Tracker application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application allows users to securely manage their personal expenses with authentication, ensuring each user can access only their own data.

---

## 🚀 Features

- 🔐 User Signup and Login
- 🔑 JWT Authentication
- 🔒 Password Encryption using bcrypt
- ➕ Add New Expenses
- 📋 View Personal Expenses
- ✏️ Edit Existing Expenses
- 🗑️ Delete Expenses
- 👤 User-specific Expense Management
- 📊 Expense Summary
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- JWT (JSON Web Token)
- bcrypt.js

### Database
- MongoDB
- Mongoose

---

## 📁 Project Structure

```
ExpenseTracker-MERN-STACK/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── README.md
├── .gitignore
└── package.json
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Mohana-28-coder/ExpenseTracker-MERN-STACK.git
```

### Navigate to the Project Folder

```bash
cd ExpenseTracker-MERN-STACK
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
npm run server
```

### Start Frontend

```bash
cd client
npm run dev
```

The application will run on:

**Frontend:** http://localhost:5173

**Backend:** http://localhost:5000

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Expenses

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/expenses` | Get all expenses |
| POST | `/api/expenses` | Add a new expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

---

## 📷 Screenshots

You can add screenshots of your application here.

Example:

```
screenshots/
├── login.png
├── signup.png
├── dashboard.png
```

---

## 🔮 Future Enhancements

- 📈 Expense Analytics Dashboard
- 📅 Monthly Expense Reports
- 🔍 Search & Filter Expenses
- 📤 Export Expenses to PDF or Excel
- 💰 Budget Planning
- 🌙 Dark Mode

---

## 👩‍💻 Author

**Mohanapriya**

- GitHub: https://github.com/Mohana-28-coder

---

## 📄 License

This project is created for educational and portfolio purposes.
