import "./aboutLeft.css";
import FastFoodLogo from "../Img/FastFood.jpg";

function AboutLeft() {
  return (
    <>
      <div className="container about-left-container">
        <div className="card about-card">
          <div className="card-body about-card-body">
            <h1 className="card-title about-left-card-title mb-4">About Us</h1>
            <p className="card-text about-left-card-text">
              FAST FOOD RESTAURANT OFFERS A SELECTION OF AUTHENTIC CUISINES AND
              DELICIOUS FOOD IN ABBOTTABAD. DINERS MAY SELECT FROM A WIDE RANGE
              OF FRESHLY PREPARED FOOD FROM OUR MENU.
            </p>
            <p className="card-text about-left-card-text">
              WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
              INGREDIENTS FROM TRUSTED SUPPLIERS.
            </p>
            <p className="card-text about-left-card-text">
              WE ARE SPECIALIZED IN PIZZA, BURGERS, SANDWICHES PASTAS AND MANY
              MORE...
            </p>
            <p className="card-text about-left-card-text">
              FAST FOOD RESTAURANT IS LOCATED AT JADOON PLAZA PHASE II,
              ABBOTTABAD.
            </p>
          </div>
          <img src={FastFoodLogo} className="card-img-top" alt="..." />
        </div>
      </div>
    </>
  );
}

export default AboutLeft;
