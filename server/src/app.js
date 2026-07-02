const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5100;

// DB Connect
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/complaints", require("./routes/complaintRoutes"));
app.use("/api/agents", require("./routes/agentRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
