import "./checkOut.css";
import CartCheckOut from "./CartCheckout";
import CheckOutBill from "./CheckOutBill";
import Footer from "./Footer";

function CheckOut() {
  return (
    <>
      {" "}
      <div className="row checkOut-row1">
        <h1>
          <ul>
            <li>Check Out</li>
          </ul>
        </h1>
      </div>
      <div className="container checkOut-container">
        <div className="container checkout-heading-container">
          <h2 className="checkout-heading">Your Order</h2>
          <h2 className="checkout-heading">Your Bill</h2>
        </div>
        <div className="row checkOut-row2">
          <div className="col cols-md-6 checkout-col">
            <CartCheckOut />
          </div>
          <div className="col cols-md-6">
            <CheckOutBill />
          </div>
        </div>
      </div>
      <div className="row checkOut-row3">
        <Footer />
      </div>
    </>
  );
}

export default CheckOut;
