//server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connection successful!"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
const studentRouter = require("./routes/students.js"); //Add students.js file
const signupRouter = require("./routes/signups.js");
const loginRouter = require("./routes/logins.js");

app.use("/student",studentRouter);
app.use("/signup",signupRouter);
app.use("/login", loginRouter);




// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
