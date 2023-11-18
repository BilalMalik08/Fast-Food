import "./confirmOrder.css";
import ConfirmInput from "./ConfirmInput";
import deliveryImage from "../Img/deliveryImage.png";
import Footer from "./Footer";

function ConfirmOrder() {
  return (
    <>
      <div className="row confirmOrder-row1">
        <h1>We deliver at your doorstep.</h1>
      </div>
      <div className="row confirmOrder-row2">
        <div className="col cols-md-9">
          <ConfirmInput />
        </div>
        <div className="col cols-md-3">
          <div className="container">
            <img src={deliveryImage} alt={deliveryImage} />
          </div>
        </div>
      </div>
      <div className="row confirmOrder-row3">
        <Footer />
      </div>
    </>
  );
}

export default ConfirmOrder;
