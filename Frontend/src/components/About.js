import "./about.css";
import AboutLeft from "./AboutLeft";
import AboutMid from "./AboutMid";
import AboutRight from "./AboutRight";
import ChefLeft from "./ChefLeft";
import ChefMid from "./ChefMid";
import ChefRight from "./ChefRight";
import Footer from "./Footer";
import PhoneLeft from "./PhoneLeft";
import PhoneRight from "./PhoneRight";

function About() {
  return (
    <>
      <div className="container about-row1-container">
        <div className="row about-row1">
          <div className="col col-md-5">
            <AboutLeft />
          </div>
          <div className="col col-md-2">
            <AboutMid />
          </div>
          <div className="col col-md-5">
            <AboutRight />
          </div>
        </div>
      </div>

      <div className="container about-row2-container">
        <div className="row about-row2">
          <div className="col col-md-5">
            <ChefLeft />
          </div>
          <div className="col col-md-2">
            <ChefMid />
          </div>
          <div className="col col-md-5">
            <ChefRight />
          </div>
        </div>
      </div>

      <div className="row about-row3">
        <div className="col col-md-6">
          <PhoneLeft />
        </div>

        <div className="col col-md-6">
          <PhoneRight />
        </div>
      </div>

      <div className="row about-row4">
        <Footer />
      </div>
    </>
  );
}

export default About;
