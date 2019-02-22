const db = require("../data/dbConfig");

module.exports = {
  getDishes,
  addDish,
  getDish,
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .select("dishes.id", "dishes.name", { recipe: "recipes.name" })
    .where({ "dishes.id": id })
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
}
