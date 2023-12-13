import React from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteReviewModal({ show, handleClose, handleDelete }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this review?</Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-dark" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteReviewModal;
