const mongoose = require("mongoose");

const WishFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    message: { type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("WishForm", WishFormSchema);
