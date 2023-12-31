import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Image can't be empty!"],
      trim: true,
    },

    name: {
      type: String,
      required: [true, "Name can't be empty!"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Price can't be empty"],
    },
    description: {
      type: String,
      required: [true, "Description can't be empty"],
    },
  },
  {
    timestamps: true,
  }
);

const Places = mongoose.model("Places", placeSchema);

export default Places;
