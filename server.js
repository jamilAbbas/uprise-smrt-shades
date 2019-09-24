const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const quotes = require("./routes/api/qoutes");
const prices = require("./routes/api/prices");
const quoteDetail = require("./routes/api/quote-details");
const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User Routes
app.use("/api/users", users);

//Quote Routes
app.use("/api/quotes", quotes);
//Price Routes
app.use("/api/prices", prices);
//Quote Details Routes
app.use("/api/quote-detail", quoteDetail);

//DB config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
