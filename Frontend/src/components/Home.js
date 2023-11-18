import "./home.css";
import Carousel from "./Carousel";
import MissionLeft from "./MissionLeft";
import MissionRight from "./MissionRight";
import FoodVideo from "./FoodVideo";
import DiningLeft from "./DiningLeft";
import DiningRight from "./DiningRight";
import SpCarousel from "./SpCarousel";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Carousel />

      <div className="row home-row1">
        <marquee className="marquee-heading">
          <h1> Welcome to Fast Food Restaurant</h1>
        </marquee>
      </div>

      <div className="row home-row2">
        <div className="col col-md-6">
          <MissionLeft />
        </div>
        <div className="col col-md-6">
          <MissionRight />
        </div>
      </div>

      <div className="row home-row3">
        <FoodVideo />
      </div>

      <div className="row home-row4">
        <div className="col col-md-6">
          <DiningLeft />
        </div>
        <div className="col col-md-6">
          <DiningRight />
        </div>
      </div>

      <div className="row home-row5">
        <div className="row6 home-row6">
          <h1>Our Specialities</h1>
        </div>
        <div className="row6 home-row7">
          <SpCarousel />
        </div>
      </div>

      <div className="row home-row8">
        <Footer />
      </div>
    </>
  );
}

export default Home;
