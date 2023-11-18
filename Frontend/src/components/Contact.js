import "./contact.css";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className="row contact-row1">
        <h1>Contact Us</h1>
      </div>
      <div className="row contact-row2">
        <div className="col col-md-6">
          <ContactLeft />
        </div>
        <div className="col col-md-6">
          <ContactRight />
        </div>
      </div>
      <div className="row contact-row3">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
