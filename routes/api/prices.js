const express = require("express");
const router = express.Router();

const Price = require("../../models/Price");

// router.get("/test", (req, res) => res.json({ msg: "Quotes working!" }));

router.get("/", (req, res) => {
	Price.find().then(price => {
		if (!price) {
			res.json("No registered Users found");
		} else {
			res.status(200).json(price);
		}
	});
});

router.post("/create", (req, res) => {
	let price = Price.findOne({ userId: req.body.userId });
	if (price) {
		Price.findByIdAndUpdate(req.body.userId,
			{
				...req.body,
				fabrics: {
					avila: req.body.avila,
					deco: req.body.deco
				},
				shade: {
					manual: req.body.manual,
					motor: req.body.motor
				},
				type: {
					single: req.body.single,
					duel: req.body.duel
				},
				motorType: {
					hardwire: req.body.hardwire,
					lilon: req.body.lilon
				},
				dimension: {
					perSquare: req.body.perSquare,
				},
			})
			.then(price => {
				if (!price) {
					let newPrice = new Price({
						...req.body,
						fabrics: {
							avila: req.body.avila,
							deco: req.body.deco
						},
						shade: {
							manual: req.body.manual,
							motor: req.body.motor
						},
						type: {
							single: req.body.single,
							duel: req.body.duel
						},
						motorType: {
							hardwire: req.body.hardwire,
							lilon: req.body.lilon
						},
						dimension: {
							perSquare: req.body.perSquare,
						},
					});
					newPrice
						.save()
						.then(price => res.json(price))
						.catch(err => console.log(err));
				} else {
					return res.status(200).json(price)
				}
			}).catch(error => {
				return res.status(500).json({ error: error.toString() })
			});
	}
});

module.exports = router;
