const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    company: String,
    address: String,
    phone: String,
    email: String,
    image: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = Vendor = mongoose.model("vendors", VendorSchema);
