const express = require('express');

const Dishes = require('./dishesModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes()
    res.status(200).json(dishes)
  } catch (error) {
    res.status(500).json({ error: "Error retrieving dishes"})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id)
    if(dish) {
      res.status(200).json(dish)
    } else {
      res.status(404).json({error: "Dish not found"})
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving dish"})
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).json({ error: "Must provide name to create dish" });
    } else {
      const [id] = await Dishes.addDish(req.body)
      res.status(201).json(id);
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating dish" });
  }
});

module.exports = router;