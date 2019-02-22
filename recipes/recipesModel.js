const db = require("../data/dbConfig");

// addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes")
    .join("dishes", "dishes.id", "=", "recipes.dish_id")
    .select(
      {
        dish: "dishes.name"
      },
      "recipes.id",
      "recipes.name",
      "recipes.instructions"
    );
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
}
