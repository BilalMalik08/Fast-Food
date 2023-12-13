import React, { useState } from "react";
import { Link } from "react-router-dom";
import complaintImage from "../Img/complaintImage.png";
import axios from "axios";

function ReviewsRight() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    opinion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/review",
        formData
      );

      if (response.status === 201) {
        console.log("Review submitted successfully");
        setFormData({ name: "", contact: "", email: "", opinion: "" });
      } else {
        console.error(
          "Failed to submit review. Unexpected status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error submitting review", error.message, error.response);
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
    </>
  );
}

export default ReviewsRight;
