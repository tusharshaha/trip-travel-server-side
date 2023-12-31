import express from "express";
import Places from "../model/Place.model.mjs";
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
  

export default router;
