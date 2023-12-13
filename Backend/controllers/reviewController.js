import ReviewModel from "../models/reviewModel.js";

const addReview = async (req, res) => {
  try {
    const { name, contact, email, opinion } = req.body;

    const newReview = new ReviewModel({
      name,
      contact,
      email,
      opinion,
    });

    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error submitting review", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteReview = async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    const deletedReview = await ReviewModel.findOneAndDelete({ _id: reviewId });

    if (deletedReview) {
      res.status(200).send("Review deleted successfully");
    } else {
      res.status(404).send("Review not found");
    }
  } catch (error) {
    console.error("Error deleting review", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateReview = async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    const updatedReview = await ReviewModel.findOneAndUpdate(
      { _id: reviewId },
      { $set: req.body },
      { new: true }
    );

    if (updatedReview) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).send("Review not found");
    }
  } catch (error) {
    console.error("Error updating review", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { addReview, getReviews, deleteReview, updateReview };
