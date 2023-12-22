import React, { useState } from "react";
import { Link } from "react-router-dom";
import complaintImage from "../Img/complaintImage.png";
import axios from "axios";
import apiURL from "../services/api";
import ReviewSuccessPopup from "./ReviewSuccessPopup";
import ReviewFailPopup from "./ReviewFailPopup";

function ReviewsRight() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    opinion: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showFailPopup, setShowFailPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiURL}/review`, formData);

      if (response.status === 201) {
        console.log("Review submitted successfully");
        setFormData({ name: "", contact: "", email: "", opinion: "" });
        setShowSuccessPopup(true);
      } else {
        console.error(
          "Failed to submit review. Unexpected status:",
          response.status
        );
        setShowFailPopup(true);
      }
    } catch (error) {
      console.error("Error submitting review", error.message, error.response);
      setShowFailPopup(true);
    }
  };

  return (
    <>
      <div className="container review-form-container">
        <h1>Review Box</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label
              htmlFor="inputName4"
              className="form-label review-form-label"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="inputContact4"
              className="form-label review-form-label"
            >
              Contact
            </label>
            <input
              type="number"
              className="form-control"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label
              htmlFor="inputEmail4"
              className="form-label review-form-label"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label
              htmlFor="inputOpinion4"
              className="form-label review-form-label"
            >
              Your Opinion
            </label>
            <input
              type="text"
              className="form-control review-form-input"
              id="opinion"
              value={formData.opinion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 review-btn">
            <button type="submit" className="btn btn-outline-light">
              Submit Review
            </button>
            <Link to="/showreviews">
              <button type="button" className="btn btn-outline-light">
                View Reviews
              </button>
            </Link>
          </div>
        </form>
        <img
          className="complaintImage"
          src={complaintImage}
          alt={complaintImage}
        />
      </div>
      {showSuccessPopup && (
        <ReviewSuccessPopup
          categoryName={formData.name} // Pass the appropriate data for display
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
      {showFailPopup && (
        <ReviewFailPopup onClose={() => setShowFailPopup(false)} />
      )}
    </>
  );
}

export default ReviewsRight;
