const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User Routes
app.use("/api/users", users);

//DB config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello World!"));
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port ${port}`));
