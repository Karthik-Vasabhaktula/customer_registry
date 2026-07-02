# Customer Registry

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing customers, complaints, support agents, notifications, and authentication.

## Features

- User Authentication (JWT)
- Customer Registration & Login
- Complaint Management
- Agent Management
- Category Management
- Notifications
- Messaging System
- Secure Password Hashing using bcrypt
- MongoDB Atlas Integration
- RESTful API
- React Frontend

---

## Tech Stack

### Frontend

- React.js
- Axios
- React Router
- CSS / Bootstrap (if applicable)

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- CORS
- dotenv

---

## Project Structure

```
Customer-Registry/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/Customer-Registry.git
```

Go into the project folder:

```bash
cd Customer-Registry
```

---

## Backend Setup

Navigate to the server folder.

```bash
cd server
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5100

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=30d
```

Start the backend server.

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5100
```

---

## Frontend Setup

Open another terminal.

Navigate to the client folder.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

or (if using Vite)

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

or

```
http://localhost:5173
```

---

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Users

```
GET /api/users
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id
```

### Complaints

```
GET /api/complaints
POST /api/complaints
PUT /api/complaints/:id
DELETE /api/complaints/:id
```

### Agents

```
GET /api/agents
POST /api/agents
```

### Categories

```
GET /api/categories
POST /api/categories
```

### Messages

```
GET /api/messages
POST /api/messages
```

### Notifications

```
GET /api/notifications
POST /api/notifications
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Backend server port |
| MONGO_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for JWT |
| JWT_EXPIRES_IN | JWT expiration time |

---

## Screenshots

Add screenshots of:

- Login Page
- Registration Page
- Dashboard
- Complaint Management
- Agent Management

---

## Future Improvements

- Email Notifications
- Role-Based Access Control
- Admin Dashboard
- Complaint Status Tracking
- File Uploads
- Search & Filtering
- Pagination
- Dashboard Analytics

---

## Author

**Saikarthik**

GitHub: https://github.com/<your-username>

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- MongoDB Atlas
- Express.js
- React.js
- Node.js
- Mongoose
- JWT
- bcrypt
