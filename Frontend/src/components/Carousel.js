import "./carousel.css";
import c1 from "../Img/c1.jpg";
import c2 from "../Img/c2.jpeg";
import c3 from "../Img/c3.jpg";
import c4 from "../Img/c4.jpg";
import c5 from "../Img/c5.png";
import c6 from "../Img/c6.jpg";
import c7 from "../Img/c7.jpg";
import c8 from "../Img/c8.jpg";

function Carousel() {
  return (
    <>
      <div className="row carousel-row1">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={c1} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c4} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c5} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c6} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c7} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={c8} className="d-block carouselImg" alt="bg-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
