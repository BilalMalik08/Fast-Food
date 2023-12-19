import React, { useState, useEffect } from "react";
import axios from "axios";
import EditReviewModal from "./EditReviewModal";
import Footer from "./Footer";
import apiURL from "../services/api";

function ShowReviews() {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${apiURL}/review`, {
          withCredentials: true,
        });
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews", error.message, error.response);
      }
    };

    fetchReviews();
  }, []);

  // Function to handle edit submission
  const handleEditSubmit = async (formData) => {
    try {
      const response = await axios.put(
        `${apiURL}/reviews/${selectedReview._id}`,
        formData
      );
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === selectedReview._id ? response.data : review
        )
      );
      console.log(`Review with ID ${selectedReview._id} edited successfully.`);
    } catch (error) {
      console.error("Error updating review", error.message, error.response);
    }
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReview({});
  };

  return (
    <div className="container-fluid showReviews-container-fluid">
      <div className="row showReviews-row1">
        <h2>Reviews</h2>
        <div className="table-container">
          <table className="table text-center">
            <thead>
              <tr>
                <th className="align-middle">Name</th>
                <th className="align-middle">Contact</th>
                <th className="align-middle">Email</th>
                <th className="align-middle">Opinion</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td className="align-middle">{review.name}</td>
                  <td className="align-middle">{review.contact}</td>
                  <td className="align-middle">{review.email}</td>
                  <td className="align-middle">{review.opinion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row showReviews-row2">
        <Footer />
      </div>
      <EditReviewModal
        show={showModal}
        handleClose={handleCloseModal}
        handleEditSubmit={handleEditSubmit}
        initialData={selectedReview}
      />
    </div>
  );
}

export default ShowReviews;
