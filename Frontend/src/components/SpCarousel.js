import "./spCarousel.css";
import cpizza from "../Img/cpizza.jpg";
import cburger from "../Img/cburger.jpg";
import cchicken from "../Img/cchicken.jpg";

function SpCarousel() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel sp-carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={cpizza} class="d-block sp-carousel-img w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="sp-carousel-text">Hot n Spicy Pizza</h1>
              <h5 className="sp-carousel-text">
                "Turn up the heat with our Hot and Spicy Pizza – a fiery delight
                of bold flavors and sizzling toppings that will spice up your
                taste buds!"
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={cburger}
              class="d-block sp-carousel-img w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="sp-carousel-text">Beef Burger</h1>
              <h5 className="sp-carousel-text">
                "Juicy, flavorful, and simply irresistible – our Beef Burger is
                the ultimate indulgence for burger enthusiasts craving
                perfection in every mouthful!"
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={cchicken}
              class="d-block sp-carousel-img w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="sp-carousel-text">Fried Chicken</h1>
              <h5 className="sp-carousel-text">
                "Crispy perfection awaits! Dive into our Fried Chicken – golden,
                crunchy, and irresistibly delicious, satisfying your cravings
                with every bite."
              </h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default SpCarousel;
