import "./adminCustomers.css";

function AdminCustomers() {
  return (
    <>
      <div className="row adminCustomers-row1">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234</td>
                <td>Ali Khan</td>
                <td>0321-1234567</td>
                <td>45A, Model Town, Lahore</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>5679</td>
                <td>Fatima Shah</td>
                <td>0300-9876543</td>
                <td>12B, Gulberg, Karachi</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2356</td>
                <td>Amir Hassan</td>
                <td>0345-6789123</td>
                <td>22C, Defense Housing Society, Islamabad</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>7890</td>
                <td>Zainab Malik</td>
                <td>0312-3456789</td>
                <td>7D, Faisal Town, Lahore</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>1122</td>
                <td>Omar Farooq</td>
                <td>0333-1112233</td>
                <td>14E, Bahria Town, Rawalpindi</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>3344</td>
                <td>Maryam Akhtar</td>
                <td>0344-2233445</td>
                <td>31F, Gulshan-e-Iqbal, Karachi</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>5566</td>
                <td>Faisal Ahmed</td>
                <td>0322-5566778</td>
                <td>18H, DHA Phase 5, Lahore</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>7788</td>
                <td>Nadia Qureshi</td>
                <td>0311-7788990</td>
                <td>25A, Gulberg, Islamabad</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>9900</td>
                <td>Ahmed Raza</td>
                <td>0300-9900111</td>
                <td>8G, Johar Town, Lahore</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>1122</td>
                <td>Farida Khan</td>
                <td>0321-1122334</td>
                <td>11D, Clifton, Karachi</td>
                <td class="actions">
                  <button class="btn adminCustomer-btn btn-outline-dark">
                    Edit
                  </button>
                  <button class="btn adminCustomer-btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminCustomers;
