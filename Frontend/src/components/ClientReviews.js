import "./reviews.css";
import p1 from "../Img/p1.png";
import p2 from "../Img/p2.png";
import p3 from "../Img/p3.png";

function ClientReviews() {
  return (
    <>
      <div className="container clients-container">
        {" "}
        <div class="card clients-card" style={{ width: "18rem" }}>
          <img src={p1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title clients-card-title">Umar Malik</h5>
            <p class="card-text clients-card-text">Best restaurant service.</p>
          </div>
        </div>{" "}
        <div class="card clients-card" style={{ width: "18rem" }}>
          <img src={p2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title clients-card-title">Bilal Malik</h5>
            <p class="card-text clients-card-text">
              They value their customers.
            </p>
          </div>
        </div>{" "}
        <div class="card clients-card" style={{ width: "18rem" }}>
          <img src={p3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title clients-card-title">Talha Nadeem</h5>
            <p class="card-text clients-card-text">The hub of taste.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientReviews;
