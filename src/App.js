import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const axios = require("axios").default;

  const APP_ID = "a01018a4";
  const APP_KEY = "8d33216ef20bcb7c64b7fc4176bc4d4d	";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [searchedText, setSearchedText] = useState("");
  // const [newRecipe, setNewRecipe] = useState(
  //   "Recipe will be added after the search"
  // );

  const [recipes, setRecipes] = useState([]);

  function makeRequest(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.edamam.com/search?q=${searchedText}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then(function (response) {
        console.log(response);
        setRecipes(response.data.hits);

        // console.log("name :", response.data.hits.recipe.label);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className="App">
      <div className="recipe-app-wrapper">
        <div class="nine">
          <h1>
            Recipeex<span>Find Your Taste</span>
          </h1>
        </div>
        <form className="search-bar">
          <input
            type="text"
            className="search-bar"
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <button type="submit" className="search-button" onClick={makeRequest}>
            Search
          </button>
        </form>

        <div className="recipes-wrapper">
          {recipes.map((recipes) => (
            <Recipe
              key={recipes}
              title={recipes.recipe.label}
              calories={recipes.recipe.calories}
              cuisineType={recipes.recipe.cuisineType}
              image={recipes.recipe.image}
              link={recipes.recipe.url}
            ></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
