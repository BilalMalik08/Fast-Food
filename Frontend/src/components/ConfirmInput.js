import "./confirmInput.css";
import { Link } from "react-router-dom";

function ConfirmInput() {
  return (
    <>
      <div className="container input-form-container">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputName4" class="form-label input-form-label">
              Name
            </label>
            <input type="text" class="form-control" id="inputName4" />
          </div>
          <div class="col-md-6">
            <label for="inputContact4" class="form-label input-form-label">
              Contact
            </label>
            <input type="number" class="form-control" id="inputContact4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label input-form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label input-form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label input-form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label input-form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Sindh</option>
              <option>Punjab</option>
              <option>Balochistan </option>
              <option>Khyber Pakhtunkhwa</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label input-form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>

          <div class="col-12">
            <Link to="/login">
              {" "}
              <button class="btn btn-outline-light">Confirm Details</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConfirmInput;
