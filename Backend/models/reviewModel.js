import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  opinion: { type: String, required: true },
});

const ReviewModel = mongoose.model("Review", reviewSchema);

export default ReviewModel;
