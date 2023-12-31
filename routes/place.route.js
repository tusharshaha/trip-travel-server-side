const express = require("express");
const Places = require("../model/place.model.js");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const place = await Places.find({});
    res.send(place);
  })
  .post(async (req, res) => {
    const place = req.body;
    const result = await Places.create(place);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res.json(result);
  });
router
  .route("/:placeId")
  .get(async (req, res) => {
    const id = req.params.placeId;
    const place = await Places.findById(id);
    res.send(place);
  })
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

module.exports = router;
