import "./phoneRight.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import play from "../Img/play.jpg";
import app from "../Img/app.jpg";
import pay from "../Img/pay.png";

function PhoneRight() {
  return (
    <>
      <div className="container phoneRight-container">
        <div className="phoneRight">
          <h3 className="download-heading">Download our mobile app.</h3>
          <img className="download-app" src={play} alt="" />
          <img className="download-app" src={app} alt="" />
          <h3 className="download-heading">Secure payment gateways.</h3>
          <img className="download-app" src={pay} alt="" />
          <div class="follow">
            <h3 className="download-heading">
              Follow us
              <div class="icons-container">
                <FontAwesomeIcon
                  className="icons"
                  id="facrbook"
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  className="icons"
                  id="twitter"
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="icons"
                  id="instagram"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="icons"
                  id="pinterest"
                  icon={faPinterestP}
                />
                <FontAwesomeIcon
                  className="icons"
                  id="youtube"
                  icon={faYoutube}
                />
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneRight;
