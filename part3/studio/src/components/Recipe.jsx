import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://www.justonecookbook.com/about/";
  let authorPhoto = "https://www.justonecookbook.com/wp-content/uploads/2024/07/namiko-chen-just-one-cookbook.jpg";
  let authorName = "Namiko Hirasawa Chen";

  return (
    <div>
      <img src={authorPhoto} alt="Namiko" style={{ objectFit: "contain", borderRadius: "50%" }} width="50%" />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = ["onions", "potatoes", "carrots", "Japenese Curry Roux", "chicken"];

  let ingredientList = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>{ingredientList}</ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Japanese Chicken Curry</h1>
        <p>Delicious Japanese chicken curry recipe for a weeknight dinner! Tender pieces of chicken, carrots, and potatoes cooked in a rich, savory curry sauce, this Japanese version of curry is a must-have for your family meal. </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="https://www.justonecookbook.com/wp-content/uploads/2021/10/Japanese-Chicken-Curry-3769-II.jpg" alt="Curry and Rice" className="imageUpdates" width="35%" />;
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
