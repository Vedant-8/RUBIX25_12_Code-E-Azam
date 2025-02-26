const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const session = require("express-session");

const port = 8888;
const app = express();

const routes_auth = require("./routes/routes_auth");
const routes_orgs = require("./routes/routes_orgs");
const routes_users = require("./routes/routes_user");
const routes_admin = require("./routes/routes_admin");

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/rubix25")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // Allow multiple origins
    credentials: true, // Allow cookies
  })
);


app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000, // 1 hour
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
    },
  })
);

// Routes
app.use("/", routes_auth);
app.use("/orgs", routes_orgs);
app.use("/users", routes_users);
app.use("/admin", routes_admin);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
