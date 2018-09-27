const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const CakeSchema = new Schema(
  {
    title: String,
    description: String,
    slug: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories"
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: "vendors"
    },
    price: Number,
    currency: String,
    tags: [
      {
        type: String
      }
    ],
    image: String
  },
  { timestamps: true }
);

CakeSchema.methods.slufigy = function() {
  this.slug =
    slugify(this.title) +
    "-" +
    ((Math.random() * Math.pow(36, 6)) | 0).toString();
};

CakeSchema.pre("validate", function(next) {
  if (!this.slug) {
    this.slufigy();
  }
  next();
});

module.exports = Cake = mongoose.model("cake", CakeSchema);
