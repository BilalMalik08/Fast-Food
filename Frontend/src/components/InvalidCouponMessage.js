import { Modal } from "react-bootstrap";
import "./invalidCouponMessage.css";

function InvalidCouponMessage({ show }) {
  return (
    <Modal
      show={show}
      centered
      dialogClassName="invalid-modal-style"
      contentClassName="invalid-modal-content"
    >
      <Modal.Body className="invalid-coupon">
        Invalid coupon code. Please try again.
      </Modal.Body>
    </Modal>
  );
}

export default InvalidCouponMessage;
