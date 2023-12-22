import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./reviewFailPopup.css";

function ReviewFailPopup({ onClose }) {
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
      dialogClassName="reviewFail-modal-style"
      contentClassName="reviewFail-modal-content"
    >
      <Modal.Body>
        <p>Review submission failed. Please try again.</p>
      </Modal.Body>
    </Modal>
  );
}

export default ReviewFailPopup;
