const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  cart: [
    {
      name: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
