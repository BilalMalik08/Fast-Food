import "./adminSettings.css";

function AdminSettings() {
  return (
    <>
      <div className="row adminSettings-row1">
        <div className="container adminSettings-container">
          <h1>Change Password</h1>
          <label for="inputPassword5" class="form-label">
            Enter your current password.
          </label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control adminSettings-input"
            aria-describedby="passwordHelpBlock"
          />
          <label for="inputPassword5" class="form-label">
            Enter new password.
          </label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control adminSettings-input"
            aria-describedby="passwordHelpBlock"
          />
          <label for="inputPassword5" class="form-label">
            Confirm new password.
          </label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control adminSettings-input"
            aria-describedby="passwordHelpBlock"
          />
          <button
            className="btn adminSettings-btn btn-outline-dark"
            type="submit"
          >
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminSettings;
