import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./db/dbconnect.mjs";
import orderRoute from "./routes/order.route.mjs";
import placeRoute from "./routes/place.route.mjs";
const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

dbConnect();

app.use("/myOrder", orderRoute);
app.use("/places", placeRoute);

app.get("/", (req, res) => {
  res.send("server hiting");
});
app.listen(port, () => {
  console.log(`listening from http://localhost:${port}`);
});
