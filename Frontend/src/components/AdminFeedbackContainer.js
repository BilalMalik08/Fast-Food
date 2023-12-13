import "./admin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import adminImg from "../Img/admin.png";
import AdminSideBar from "./AdminSideBar";
import AdminFeedback from "./AdminFeedback";
import Footer from "./Footer";

function AdminFeedbackContainer() {
  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-3">
          <div className="row admin-row2">
            <Link to="/dashboard">
              {" "}
              <img className="admin-img" src={adminImg} alt="" />
            </Link>
          </div>
          <AdminSideBar />
        </div>
        <div className="col col-md-9 admin-feedback-col">
          <AdminFeedback />
        </div>
      </div>
      <div className="row admin-row3">
        <Footer />
      </div>
    </>
  );
}

export default AdminFeedbackContainer;
