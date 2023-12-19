import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./categoryEditSuccessPopup.css"; // Import your CSS styles for the edit success popup

function CategoryEditSuccessPopup({ categoryName, onClose }) {
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
      dialogClassName="editSuccess-modal-style"
      contentClassName="editSuccess-modal-content"
    >
      <Modal.Body>
        <p>
          Category: <strong>{categoryName}</strong> edited successfully.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryEditSuccessPopup;
