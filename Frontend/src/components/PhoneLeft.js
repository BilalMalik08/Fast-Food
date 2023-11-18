import "./phoneLeft.css";
import phone from "../Img/phone.png";
import phoneApp from "../Img/phoneApp.png";

function PhoneLeft() {
  return (
    <>
      <div className="container phoneLeft-container">
        <div class="phone">
          <img src={phone} alt="" />
          <div class="phone-screen">
            <img src={phoneApp} alt="" class="phone-app-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneLeft;
