import "./reviews.css";
import reviewImage from "../Img/rewiewImg.jpg";

function ReviewsLeft() {
  return (
    <>
      <div className="container reviews-container">
        <div className="card reviews-card">
          <div className="card-body reviews-card-body">
            <h1 className="card-title reviews-card-title mb-4">
              Your Opinion Matters
            </h1>
            <p className="card-text reviews-card-text">
              Your feedback is our secret ingredient! We deeply appreciate your
              reviews as they help us serve you better. Thank you for being our
              valued customer!
            </p>
            <p className="card-text reviews-card-text">
              At FAST FOOD RESTAURANT, your opinions matter the most to us. Your
              feedback guides us in providing an exceptional dining experience.
              Please keep sharing your thoughts, as they make us better every
              day.
            </p>
            <p className="card-text reviews-card-text">
              Every review is a golden nugget of wisdom for us. We genuinely
              value your thoughts and take every comment to heart. Thank you for
              being part of our journey to improvement!
            </p>
            <p className="card-text reviews-card-text">
              We believe in the power of your voice! Your reviews shape our
              services and inspire us to reach new heights. Please continue
              sharing your experiences; they are our greatest source of
              motivation.
            </p>
          </div>
          <img
            src={reviewImage}
            className="reviews-card-img-top reviewImage"
            alt={reviewImage}
          />
        </div>
      </div>
    </>
  );
}

export default ReviewsLeft;
