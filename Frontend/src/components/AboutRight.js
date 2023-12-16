import "./aboutRight.css";
import chef from "../Img/chef.jpg";

function AboutRight() {
  return (
    <>
      <div className="container about-right-container">
        <div className="card about-card">
          <img src={chef} className="card-img-top" alt="..." />
          <div className="card-body about-card-body">
            <h1 className="card-title about-right-card-title mb-4">
              Our History
            </h1>
            <p className="card-text about-right-card-text">
              IT ALL STARTED WITH COLONEL HARLAND SANDERS, THE MAN WHO CONVINCED
              THE COUNTRY BY SAYING “WE DO CHICKEN RIGHT!” SANDERS TOOK A GREAT
              DEAL OF TIME PERFECTING HIS ICONIC SECRET RECIPE OF 11 HERBS AND
              SPICES, A LEGACY HE’S BROUGHT TO THE COUNTRY THROUGH FAST FOOD’S
              100 RESTAURANTS.
            </p>
            <p className="card-text about-right-card-text">
              STARTING FROM OUTSIDE OF HIS GAS STATION IN KORBIN, KENTUCKY TO
              BEING A RECOGNIZED FACE, WE OWE OUR SUCCESS TO THE COLONEL’S HARD
              WORK AND PASSION FOR SHARING HIS LOVE FOR CHICKEN WITH THE
              COUNTRY!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutRight;
