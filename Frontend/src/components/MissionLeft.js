import "./missionLeft.css";
import missionImg from "../Img/missionImg.png";

function MissionLeft() {
  return (
    <>
      <div className="container mission-left-container">
        <div class="card mission-left-card">
          <div class="card-body mission-left-card-body">
            <img
              src={missionImg}
              class="card-img-top mission-left-img"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionLeft;
