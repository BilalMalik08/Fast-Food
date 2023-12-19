import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./categoryEditFailPopup.css"; // Import your CSS styles for the edit fail popup

function CategoryEditFailPopup({ onClose }) {
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
      dialogClassName="editFail-modal-style"
      contentClassName="editFail-modal-content"
    >
      <Modal.Body>
        <p>Edit operation failed. Please try again.</p>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryEditFailPopup;
