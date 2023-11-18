import "./contactRight.css";

function ContactRight() {
  return (
    <>
      <div className="container map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.309073272243!2d73.23334311477069!3d34.18957868056875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3050d3f2d077%3A0xc60029e9e1da82aa!2sJadoon%20Plaza%20Phase%202!5e0!3m2!1sen!2s!4v1672115550762!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactRight;
