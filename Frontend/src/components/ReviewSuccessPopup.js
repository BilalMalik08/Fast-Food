import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./reviewSuccessPopup.css";

function ReviewSuccessPopup({ categoryName, onClose }) {
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
      dialogClassName="reviewSuccess-modal-style"
      contentClassName="reviewSuccess-modal-content"
    >
      <Modal.Body>
        <p>
          Review by: <strong>{categoryName}</strong> submitted successfully.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ReviewSuccessPopup;
