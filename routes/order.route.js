const express = require("express");
const Order = require("../model/Order.model");
const router = express.Router();

router.route("/").post(async (req, res) => {
  const result = await Order.create(req.body);
  res.json(result);
});
router.get("/all", async (req, res) => {
  const result = await Order.find({});
  res.send(result);
});
router.route("/:email").get(async (req, res) => {
  const result = await Order.findOne({
    email: req.params.email,
  });
  res.send(result);
});

module.exports = router;
