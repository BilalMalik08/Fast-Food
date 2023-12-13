import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmationModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-dark" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="btn btn-danger" onClick={handleConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
