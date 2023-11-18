import React, { useState, useEffect, useRef } from "react";
import InvalidCouponMessage from "./InvalidCouponMessage";
import CouponAppliedMessage from "./CouponAppliedMessage";

function Coupon({ applyCoupon }) {
  const [couponCode, setCouponCode] = useState("");
  const [showInvalidCoupon, setShowInvalidCoupon] = useState(false);
  const [showCouponApplied, setShowCouponApplied] = useState(false);
  const couponInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApplyCoupon();
  };

  const handleCouponChange = (e) => {
    const input = e.target;
    input.setCustomValidity(""); // Reset custom validation message
    setCouponCode(input.value);
    setShowInvalidCoupon(false); // Reset showInvalidCoupon state when user types
  };

  const handleApplyCoupon = () => {
    if (!couponCode) {
      // If input is empty, set a custom validation message and return
      couponInputRef.current.setCustomValidity("Coupon code is required.");
      couponInputRef.current.reportValidity();
      return;
    }

    if (couponCode === "discount10") {
      applyCoupon(0.1); // Apply 10% discount
      setShowCouponApplied(true); // Show "Coupon Applied" popup
      setCouponCode(""); // Clear the input field after applying discount
    } else {
      setShowInvalidCoupon(true);
    }
  };

  useEffect(() => {
    let timeout;
    if (showInvalidCoupon || showCouponApplied) {
      timeout = setTimeout(() => {
        setShowCouponApplied(false);
        setShowInvalidCoupon(false);
      }, 1500); // Display for 1.5 seconds (1500 milliseconds)
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showInvalidCoupon, showCouponApplied]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card coupon-card">
          <div className="card-body coupon-card-body">
            <h5 className="card-title coupon-card-title">Avail Discounts</h5>
            <input
              className="coupon-input"
              type="text"
              placeholder="Enter coupons to avail discounts"
              value={couponCode}
              onChange={handleCouponChange}
              ref={couponInputRef}
              required
            />
            <button className="btn btn-outline-light coupon-btn" type="submit">
              Enter Coupon
            </button>
          </div>
        </div>
      </form>

      <CouponAppliedMessage
        show={showCouponApplied}
        onClose={() => setShowCouponApplied(false)}
      />

      <InvalidCouponMessage
        show={showInvalidCoupon}
        onClose={() => setShowInvalidCoupon(false)}
      />
    </>
  );
}

export default Coupon;
