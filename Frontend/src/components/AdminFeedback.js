import "./showReviews.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditReviewModal from "./EditReviewModal";
import DeleteReviewModal from "./DeleteReviewModal";

function ShowReviews() {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteReviewId, setDeleteReviewId] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/review");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews", error.message, error.response);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = (reviewId) => {
    setDeleteReviewId(reviewId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      // Make a DELETE request to the server to delete the review
      await axios.delete(`/review/${deleteReviewId}`);

      // Update the state to reflect the deletion
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== deleteReviewId)
      );

      console.log(`Review with ID ${deleteReviewId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting review", error.message, error.response);
    } finally {
      // Reset delete modal state
      setDeleteReviewId(null);
      setShowDeleteModal(false);
    }
  };

  const handleEdit = (reviewId) => {
    const reviewToEdit = reviews.find((review) => review._id === reviewId);
    setSelectedReview(reviewToEdit);
    setShowModal(true);
  };

  const handleEditSubmit = async (formData) => {
    try {
      const response = await axios.put(
        `/review/${selectedReview._id}`,
        formData
      );

      // Update the state to reflect the changes
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

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReview({});
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row showReviews-row1">
          <h2>Reviews</h2>
          <table className="table text-center">
            <thead>
              <tr>
                <th className="align-middle">Name</th>
                <th className="align-middle">Contact</th>
                <th className="align-middle">Email</th>
                <th className="align-middle">Opinion</th>
                <th className="align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td className="align-middle">{review.name}</td>
                  <td className="align-middle">{review.contact}</td>
                  <td className="align-middle">{review.email}</td>
                  <td className="align-middle">{review.opinion}</td>
                  <td className="align-middle">
                    <button
                      className="btn btn-outline-success ms-1 me-1 mb-1 mt-1 px-4"
                      onClick={() => handleEdit(review._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger ms-1 me-1 mb-1 mt-1 px-4"
                      onClick={() => handleDelete(review._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row showReviews-row2"></div>
        <EditReviewModal
          show={showModal}
          handleClose={handleCloseModal}
          handleEditSubmit={handleEditSubmit}
          initialData={selectedReview}
        />
      </div>
      <DeleteReviewModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={confirmDelete}
      />
    </>
  );
}

export default ShowReviews;
