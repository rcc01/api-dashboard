import "../App.css";
import { GiMeal } from "react-icons/gi";

const FoodApp = () => {
  return (
    <div id="restaurants-section" className="menu-section">
      <div className="menu-section-title">
        <GiMeal />
        <span className="menu-section-title-text">Get it delivered!</span>
      </div>
      <div className="menu-section-content">
        <div
          className="restaurant-card background-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80)",
          }}
        >
          <div className="restaurant-card-content">
            <div className="restaurant-card-content-items">
              <span className="restaurant-card-title">Vegan Burgers</span>
              <span className="restaurant-card-desc">
                The best vegan burgers in town!
              </span>
            </div>
          </div>
        </div>
        <div
          className="restaurant-card background-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1637806930600-37fa8892069d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80)",
          }}
        >
          <div className="restaurant-card-content">
            <div className="restaurant-card-content-items">
              <span className="restaurant-card-title">Thai Food</span>
              <span className="restaurant-card-desc">
                The best thai food in town!
              </span>
            </div>
          </div>
        </div>
        <div
          className="restaurant-card background-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1584583570840-0a3d88497593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80)",
          }}
        >
          <div className="restaurant-card-content">
            <div className="restaurant-card-content-items">
              <span className="restaurant-card-title">Fresh Sushi</span>
              <span className="restaurant-card-desc">
                The best sushi in town!
              </span>
            </div>
          </div>
        </div>
        <div
          className="restaurant-card background-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        >
          <div className="restaurant-card-content">
            <div className="restaurant-card-content-items">
              <span className="restaurant-card-title">Healthy Food</span>
              <span className="restaurant-card-desc">
                Healthy food made with love!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodApp;
