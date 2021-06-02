import React from "react";
import RecipeStyles from "./styles/RecipeStyles.css";

const Recipe = ({ title, calories, image, cuisineType, link }) => {
  return (
    <div className="container">
      <a href={link} onclick="location.href='https://google.com';">
        <div className="recipe-wrapper">
          <div className="overlay">
            <div class="text">
              {title}
              <br />
              Calories :{Math.round(calories)}
              <br />
              {cuisineType}
            </div>
          </div>
          <img src={image} alt="image" className="image-food" />
        </div>
      </a>
    </div>
  );
};

export default Recipe;
