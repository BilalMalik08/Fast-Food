import express from "express";
import reviewController from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", reviewController.addReview);
router.get("/", reviewController.getReviews);
router.delete("/:reviewId", reviewController.deleteReview);
router.put("/:reviewId", reviewController.updateReview);

export default router;
