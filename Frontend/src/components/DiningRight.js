import "./diningRight.css";
import diningImg from "../Img/diningImg.png";

function DiningRight() {
  return (
    <>
      <div className="container dining-right-container">
        <div class="card dining-right-card">
          <div class="card-body dining-right-card-body">
            <img
              src={diningImg}
              class="card-img-top dining-right-img"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DiningRight;
