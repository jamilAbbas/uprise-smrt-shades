const express = require("express");
const router = express.Router();

const QuoteDetail = require("../../models/QuoteDetail");

router.post("/create", (req, res) => {
	QuoteDetail.findOne({ userId: req.body.userId }).then(qd => {
		if (qd) {
			const filter = { userId: qd.userId };
			QuoteDetail.findOneAndUpdate(filter, { ...req.body })
				.then(data => res.status(200).json(data));
		} else {
			let newQuote = new QuoteDetail({
				...req.body,
				userId: req.body.userId,
				height: req.body.height,
				width: req.body.width,
				fabrics: req.body.fabrics,
				motor: req.body.motor,
			});

			newQuote
				.save()
				.then(quote => res.json(quote))
				.catch(err => console.log(err));
		}
	});
});

module.exports = router;