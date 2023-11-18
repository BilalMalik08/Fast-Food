import "./foodVideo.css";
import RestaurantVideo1 from "../video/RestaurantVideo1.mp4";

function FoodVideo() {
  return (
    <>
      <video className="restaurantVideo" autoPlay controls muted loop>
        <source src={RestaurantVideo1} type="video/mp4" />
      </video>
    </>
  );
}

export default FoodVideo;
