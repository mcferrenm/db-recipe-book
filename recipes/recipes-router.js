const express = require("express");

const Recipes = require("./recipesModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const recipes = await Recipes.getRecipes()
  res.status(200).json(recipes)
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.name || !req.body.dish_id) {
      res.status(400).json({ error: "Must provide name & dish_id to create recipe" });
    } else {
      const [id] = await Recipes.addRecipe(req.body)
      res.status(201).json(id);
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating recipe" });
  }
});

module.exports = router;
