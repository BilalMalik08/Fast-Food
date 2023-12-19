import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./categoryDeleteFailPopup.css"; // Import your CSS styles for the delete fail popup

function CategoryDeleteFailPopup({ onClose }) {
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
      dialogClassName="deleteFail-modal-style"
      contentClassName="deleteFail-modal-content"
    >
      <Modal.Body>
        <p>Delete operation failed. Please try again.</p>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryDeleteFailPopup;
