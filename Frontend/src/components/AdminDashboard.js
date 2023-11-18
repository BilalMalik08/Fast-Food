import "./adminDashboard.css";
import AdminDashboardCards from "./AdminDashboardCards";
import AdminDashboardClock from "./AdminDashboardClock";

function AdminDashboard() {
  return (
    <>
      <div className="row adminDashboard-row1">
        <div className="row adminDashboard-row2">
          <div className="container">
            <AdminDashboardCards />
          </div>
        </div>

        <div className="row adminDashboard-row3">
          <AdminDashboardClock />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
