import "./admin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import adminImg from "../Img/admin.png";
// import AdminSideBar from "./AdminSideBar";
// import AdminDashboard from "./AdminDashboard";
import AdminSideBar2 from "./AdminSideBar2";
import AdminDashboard2 from "./AdminDashboard2";
import Footer from "./Footer";

function AdminDashboardContainer() {
  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminDashboard2 />
        </div>
      </div>
      <div className="row admin-row3">
        <Footer />
      </div>
    </>
  );
}

export default AdminDashboardContainer;
