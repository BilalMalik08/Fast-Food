import "./complaints.css";
import Footer from "./Footer";

function Complaints() {
  return (
    <>
      <div className="row complaints-row1">
        <h1>
          We noticed your complaint. <br /> We will take action soon.
        </h1>
      </div>
      <div className="row complaints-row2">
        <Footer />
      </div>
    </>
  );
}

export default Complaints;
