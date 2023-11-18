import "./checkoutBill.css";
import React from "react";
import { Link } from "react-router-dom";

function CheckOutBill({ totalPayment }) {
  return (
    <>
      {" "}
      <div className="checkout-bill-box">
        <h2 className="checkout-bill-title">Total Payment:</h2>
        <p className="checkout-bill-amount">{totalPayment} PKR</p>
        <Link to="/orderconfirmation">
          <button className="btn btn-outline-light pay-btn">
            Confirm Your Order
          </button>
        </Link>
      </div>
    </>
  );
}

export default CheckOutBill;
