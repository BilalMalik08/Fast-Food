import "./chefRight.css";
import chef2 from "../Img/chef2.jpg";

function ChefRight() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={chef2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title chef-card-title mb-4">Our Chefs</h1>
            <p className="card-text chef-card-text">
              Our chefs are genius, crafting exquisite dishes that delight your
              taste buds and leave you wanting more.
            </p>
            <p className="card-text chef-card-text">
              Our chefs sources only the freshest and finest local ingredients,
              ensuring each dish bursts with flavor and quality.
            </p>
            <p className="card-text chef-card-text">
              Enjoy a personalized dining experience as our chefs are always
              willing to cater to your dietary preferences, creating bespoke
              dishes tailored just for you.
            </p>
            <p className="card-text chef-card-text">
              Taste the magic behind our award-winning dishes, prepared with
              love and skill by our exceptional chefs, who has received
              accolades for their culinary expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChefRight;
