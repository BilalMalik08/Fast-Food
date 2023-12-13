import "./contactLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faHotel,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function ContactLeft() {
  return (
    <>
      <div className="container contact-list-container">
        <ul className="list-group">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faPhone} className="contactLeft-icon" />
            {"Contact: +92 3457265250"}
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon icon={faEnvelope} className="contactLeft-icon" />
            {"Email: fastfood@gmail.com"}
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="contactLeft-icon"
            />
            {"Location: Abbottabad"}
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon icon={faHotel} className="contactLeft-icon" />
            {"Address: Jadoon Plaza Phase II"}
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon icon={faClock} className="contactLeft-icon" />
            {"Timings: 10Am to 1AM"}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactLeft;
