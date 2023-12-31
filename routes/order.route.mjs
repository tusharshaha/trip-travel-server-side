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
router
  .route("/:id")
  .put(async (req, res) => {
    const id = req.params.placeId;
    const result = await Places.findByIdAndUpdate(id, { status: "Approved" });
    res.json(result);
  })
  .delete(async (req, res) => {
    const id = req.params.placeId;
    const result = await Places.findByIdAndDelete(id);
    res.json(result);
  });
router.route("/:email").get(async (req, res) => {
  const result = await Order.find({
    email: req.params.email,
  });
  res.send(result);
});

export default router;
