const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    title: {
      type: String
    },
    item: [
      {
        cake: {
          type: Schema.Types.ObjectId,
          ref: "cakes"
        }
      }
    ],
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    orderState: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = Order = mongoose.model("orders", OrderSchema);
