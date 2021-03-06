const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const passport = require("passport");
// import key
const key = require("../../config/keys").secretOrKey;
router.get("/test", (req, res) => res.json({ msg: "User working!" }));

// @route GET/api/users/register
// @desc register user
// @access public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      let newUser = new User({
        email: req.body.email,
        fullname: req.body.fullname,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route GET/api/users/login
// @desc login user
// @access public
router.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          role: user.role,
          email: user.email,
          isActive: user.isActive,
          fullname: user.fullname,
        }; // Create JWT Payload
        // Sign Token
        jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        return res.status(400).json({ password: "password inncorrect" });
      }
    });
  });
});
// @route GET/api/users/current
// @desc get current user
// @access private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      fullname: req.user.fullname,
      email: req.user.email
    });
  }
);

// @route GET/api/users/all
// @desc get all registered users
// @access private

router.get("/all", (req, res) => {
  User.find().then(users => {
    if (!users) {
      res.json("No registered Users found");
    } else {
      res.status(200).json(users);
    }
  });
});

// @route Post/api/users/delete
// @desc delete User
// @access private

router.post("/delete", (req, res) => {
  User.deleteOne({ _id: req.body.userId }).then(user => {
    if (!user) {
      res.json({ deleteFailed: "Could Not delete the art" });
    } else {
      res.json({ deleteSuccess: "Sussessfully deleted the art" });
    }
  });
});

// @route PUT/api/user/id
// @desc update specific user status
// @access public
router.put("/:id", async (req, res) => {
  User.findByIdAndUpdate(req.params.id,
    { isActive: req.body.isActive })
    .then(user => {
      if (!user) {
        return res.json({ msg: "update failed" })
      } else {
        return res.status(200).json(user)
      }
    }).catch(error => {
      return res.status(500).json({ error: error.toString() })
    });
});


// @route PUT/api/user/id
// @desc update specific user status
// @access public
router.put("/:id/role", async (req, res) => {
  User.findByIdAndUpdate(req.params.id,
    { role: req.body.role })
    .then(user => {
      if (!user) {
        return res.json({ msg: "update failed" })
      } else {
        return res.status(200).json(user)
      }
    }).catch(error => {
      return res.status(500).json({ error: error.toString() })
    });
});

// @route GET/api/users/current
// @desc get current user
// @access private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      fullname: req.user.fullname,
      email: req.user.email
    });
  }
);


// @route GET/api/user/all
// @desc get all user
// @access public

router.get("/all", (req, res) => {
  User.find().then(users => {
    if (!users) {
      return res.json({ msg: "No User available" });
    } else {
      return res.status(200).json(users);
    }
  });
});



module.exports = router;
