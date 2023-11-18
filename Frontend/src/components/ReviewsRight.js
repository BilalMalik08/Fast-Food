import "./reviews.css";
import { Link } from "react-router-dom";
import complaintImage from "../Img/complaintImage.png";

function ReviewsRight() {
  return (
    <>
      <div classNameName="container review-form-container">
        <h1>Complaint Box</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputName4" className="form-label review-form-label">
              Name
            </label>
            <input type="text" className="form-control" id="inputName4" />
          </div>
          <div className="col-md-6">
            <label for="inputContact4" className="form-label review-form-label">
              Contact
            </label>
            <input type="number" className="form-control" id="inputContact4" />
          </div>
          <div className="col-md-12">
            <label for="inputContact4" className="form-label review-form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-12">
            <label
              for="inputComplaint4"
              className="form-label review-form-label"
            >
              Your Complaint
            </label>
            <input
              type="text"
              className="form-control review-form-input"
              id="inputComplaint4"
            />
          </div>
          <div className="col-12">
            <Link to="/complaints">
              {" "}
              <button className="btn btn-outline-light">
                Submit Complaint
              </button>
            </Link>
          </div>
        </form>
        <img
          className="complaintImage"
          src={complaintImage}
          alt={complaintImage}
        />
      </div>
    </>
  );
}

export default ReviewsRight;
