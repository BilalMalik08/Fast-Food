import "./adminDashboardCards.css";

function AdminDashboardCards() {
  return (
    <>
      <div className="card adminDashboard-card mb-3">
        <div className="card-body adminDashboard-card-body">
          <h6 className="card-title adminDashboard-card-title">Categories</h6>
          <p className="card-text adminDashboard-card-text">9</p>
        </div>
      </div>
      <div className="card adminDashboard-card mb-3">
        <div className="card-body adminDashboard-card-body">
          <h6 className="card-title adminDashboard-card-title">Menu Items</h6>
          <p className="card-text adminDashboard-card-text">135</p>
        </div>
      </div>
      <div className="card adminDashboard-card mb-3">
        <div className="card-body adminDashboard-card-body">
          <h6 className="card-title adminDashboard-card-title">Orders</h6>
          <p className="card-text adminDashboard-card-text">19</p>
        </div>
      </div>
      <div className="card adminDashboard-card mb-3">
        <div className="card-body adminDashboard-card-body">
          <h6 className="card-title adminDashboard-card-title">Customers</h6>
          <p className="card-text adminDashboard-card-text">15</p>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardCards;
