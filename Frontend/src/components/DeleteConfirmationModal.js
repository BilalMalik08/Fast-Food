import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CategoryDeleteSuccessPopup from "./CategoryDeleteSuccessPopup";
import CategoryDeleteFailPopup from "./CategoryDeleteFailPopup";

const DeleteConfirmationModal = ({ show, handleClose, handleConfirm }) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteFail, setDeleteFail] = useState(false);

  const handleDeleteConfirm = async () => {
    try {
      // Perform the delete operation
      await handleConfirm();
      // If successful, show the success popup
      setDeleteSuccess(true);
    } catch (error) {
      // If there's an error, show the fail popup
      setDeleteFail(true);
    }
  };

  const handleSuccessClose = () => {
    setDeleteSuccess(false);
    handleClose();
  };

  const handleFailClose = () => {
    setDeleteFail(false);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Show the success and fail popups */}
      {deleteSuccess && (
        <CategoryDeleteSuccessPopup onClose={handleSuccessClose} />
      )}
      {deleteFail && <CategoryDeleteFailPopup onClose={handleFailClose} />}
    </>
  );
};

export default DeleteConfirmationModal;
