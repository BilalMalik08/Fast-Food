import "./reviews.css";
import ReviewsLeft from "./ReviewsLeft";
import ReviewsRight from "./ReviewsRight";
import Footer from "./Footer";
import ClientReviews from "./ClientReviews";

function Reviews() {
  return (
    <>
      <div className="row reviews-row1">
        <div className="col cols-md-6">
          <ReviewsLeft />
        </div>
        <div className="col cols-md-6">
          <ReviewsRight />
        </div>
      </div>
      <div className="row reviews-row2">
        <h1>See what our customers say about us.</h1>
      </div>
      <div className="row reviews-row3">
        <ClientReviews />
      </div>
      <div className="row reviews-row2">
        <Footer />
      </div>
    </>
  );
}

export default Reviews;
