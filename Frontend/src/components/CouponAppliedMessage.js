import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./couponAppliedMessage.css";

function CouponAppliedMessage({ show, onClose }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      dialogClassName="appliedCoupon-modal-style"
      contentClassName="appliedCoupon-modal-content"
    >
      <Modal.Body>
        Your coupon has been applied successfully!{" "}
        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
      </Modal.Body>
    </Modal>
  );
}

export default CouponAppliedMessage;
