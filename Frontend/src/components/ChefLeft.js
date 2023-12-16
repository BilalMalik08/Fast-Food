import "./chefLeft.css";
import kitchen from "../Img/kitchen.jpg";

function ChefLeft() {
  return (
    <>
      <div className="container chef-left-container">
        <div className="card chef-card chec-left-card">
          <div className="card-body chef-card-body">
            <h1 className="card-title chef-left-card-title mb-4">
              Our Kitchen
            </h1>
            <p className="card-text chef-left-card-text">
              Our kitchen is a hub of innovation, where traditional recipes meet
              modern culinary techniques.
            </p>
            <p className="card-text chef-left-card-text">
              Our kitchen is designed for efficiency. With a seamless workflow
              and a well-coordinated team, your meals are prepared and served
              promptly.
            </p>
            <p className="card-text chef-left-card-text">
              We believe in responsible dining. Our kitchen operates with
              eco-friendly practices, minimizing food waste and embracing
              sustainable sourcing.
            </p>
            <p className="card-text chef-left-card-text">
              Enjoy your meal knowing that it's not only delicious but also
              prepared with a commitment to a greener, healthier planet.
            </p>
          </div>
          <img src={kitchen} className="card-img-top kitchen-img" alt="..." />
        </div>
      </div>
    </>
  );
}

export default ChefLeft;
