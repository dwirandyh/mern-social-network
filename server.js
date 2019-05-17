const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Use Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth/", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port " + port));
