import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./categoryFailedPopup.css"; // Import your CSS styles for the failed popup

function CategoryFailedPopup({ onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000); // Close the modal after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="categoryFailed-modal-style"
      contentClassName="categoryFailed-modal-content"
    >
      <Modal.Body>
        <p>Category addition failed. Please try again.</p>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryFailedPopup;
