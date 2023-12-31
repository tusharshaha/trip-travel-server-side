const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User name can't be empty!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email can't be empty!"],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Date can't be empty!"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address can't be empty!"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Price name can't be empty!"],
      trim: true,
    },
    orderName: {
      type: String,
      required: [true, "Order name can't be empty!"],
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Status name can't be empty!"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("myOrder", orderSchema);

module.exports = Order;
