import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./categorySuccessMessage.css";

function CategorySuccessMessage({ categoryName, onClose }) {
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
      dialogClassName="categorySuccess-modal-style"
      contentClassName="categorySuccess-modal-content"
    >
      <Modal.Body>
        <p>
          Category: <strong>{categoryName}</strong> added successfully.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default CategorySuccessMessage;
