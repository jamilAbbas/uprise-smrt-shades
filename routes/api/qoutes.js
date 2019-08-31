const express = require("express");
const router = express.Router();

const Quote = require("../../models/Qoute");

router.get("/test", (req, res) => res.json({ msg: "Quotes working!" }));

// @route POST/api/qoutes/create
// @desc create quote
// @access public

router.post("/create", (req, res) => {
  let newQuote = new Quote({
    ...req.body,
    userId: req.body.userId,
    // shadeType: req.body.shadeType,
    height: req.body.height,
    width: req.body.width,
    // mountType: req.body.mountType,
    // controlSide: req.body.controlSide,
    // headerShadeType: req.body.headerShadeType,
    fabrics: req.body.fabrics,
    // roleDirection: req.body.roleDirection,
    motor: req.body.motor,
    // dcType: req.body.dcType
  });

  newQuote
    .save()
    .then(quote => res.json(quote))
    .catch(err => console.log(err));
});

// @route GET/api/qoutes/all
// @desc get all quotes
// @access public

router.get("/all", (req, res) => {
  Quote.find().then(quotes => {
    if (!quotes) {
      return res.json({ msg: "No Quotes available" });
    } else {
      return res.status(200).json(quotes);
    }
  });
});

// @route GET/api/qoutes/id
// @desc get a specific quotes
// @access public
router.get("/:id", (req, res) => {
  Quote.findOne({ _id: req.params.id }).then(quote => {
    if (!quote) {
      return res.json({ msg: "Quote not found" });
    } else {
      return res.status(200).json(quote);
    }
  });
});

// @route GET/api/qoutes/userId
// @desc get qoutes against a userid
// @access public

router.get('/user/:userId', (req, res)=>{
  Quote.find({userId: req.params.userId}).then( qts => {
    if(qts.length < 1){
      return res.json({msg :'No quotes found for this user'})
    }else{
      return res.status(200).json(qts);
    }
  }).catch(error => {
    return res.status(500).json({error: error.toString()})
  });
});
module.exports = router;
