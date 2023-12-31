const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const orderRoute = require("./routes/order.route.js");
const placeRoute = require("./routes/place.route.j");
const dbConnect = require("./db/dbconnect");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

dbConnect()

app.use("/myOrder", orderRoute)
app.use("/places", placeRoute)

app.get("/", (req, res) => {
  res.send("server hiting");
});
app.listen(port, () => {
  console.log(`listening from http://localhost:${port}`);
});
