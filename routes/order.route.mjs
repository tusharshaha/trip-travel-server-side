import express from "express";
import Order from "../model/Order.model.mjs";
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

export default router;
