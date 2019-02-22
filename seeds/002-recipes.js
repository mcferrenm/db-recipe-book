
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Homemade Veggie', 
          instructions: `"Sprinkle yeast over warm water in a small bowl. The water should be no more than 100 degrees F (40 degrees C). Let stand for 5 minutes until yeast softens and begins to form a creamy foam.
          Sift flour, sugar, 1 tablespoon oregano, and 1 teaspoon salt into a large bowl. Mix egg and oil into dry ingredients; stir in yeast mixture. When dough has pulled together, turn out onto a lightly floured surface and knead until smooth and elastic, about 8 minutes. Lightly oil a large bowl, then place dough in bowl and turn to coat with oil. Cover with a light cloth and let rise in a warm place (80 to 95 degrees F (27 to 35 degrees C)) until doubled in volume, about 1 hour.
          Preheat oven to 450 degrees F (235 degrees C). Lightly grease a baking sheet.
          Cook and stir diced tomatoes, tomato paste, onion, 1 tablespoon oregano, garlic, onion powder, 1 teaspoon salt, and pepper in a saucepan over medium heat. Cook until sauce has thickened, 15 to 20 minutes.
          Punch down dough and turn it out onto a lightly floured surface. Use a knife to divide dough into two equal pieces--do not tear. Shape dough into rounds and let rest for 10 minutes. Form dough into rectangles, and place onto prepared baking sheet. Spoon tomato sauce over dough. Sprinkle with 1 1/4 cup mozzarella cheese; top with bell pepper, onion, and mushroom. Sprinkle 1/4 cup mozzarella cheese over top.
          Bake in preheated oven until crust is browned and crisp and cheese has melted, 20 to 25 minutes."`,
          dish_id: 1
        },
        {
          name: 'Chicago Deep Dish', 
          instructions: `Pour water into the bowl of a stand mixer fitted with a paddle attachment. Sprinkle in yeast and let dissolve, about 10 minutes. Add olive oil, melted butter, sugar, salt, cornmeal, and most of the flour. Knead, stopping to scrape down the sides occasionally and adding more flour as needed, until smooth and elastic.
          Transfer dough to a lightly floured work surface. Knead in extra flour if needed. Roll into a ball and place in a bowl greased with 1/2 teaspoon olive oil. Cover with a plate and let rise in a warm spot until doubled in volume, 1 to 2 hours.
          Meanwhile, let pizza sauce simmer in a pot over low heat until very thick, 60 to 90 minutes.
          Preheat the oven to 425 degrees F (220 degrees C).
          Poke dough to deflate and turn out onto your work surface. Press and stretch out dough into a round shape 3 to 4 inches larger than a 12-inch cast iron skillet. Brush skillet with 1 1/2 teaspoons olive oil. Place dough in the skillet; stretch and pull to evenly distribute it over the bottom and sides.
          Lay provolone cheese over the bottom of the crust. Scatter fresh mozzarella on top. Add Italian sausage and firm mozzarella. Ladle pizza sauce generously on top. Grate Parmesan cheese on top. Fold the edges of the crust in towards the center to seal in the sides. Drizzle crust and center with 1 tablespoon olive oil.
          Bake in the center of the preheated oven until crust sounds hollow and pizza is beautifully browned, about 35 minutes. Let rest for 10 minutes before slicing.`,
          dish_id: 1
        },
        {
          name: 'White Pizza', 
          instructions: `Preheat the oven to 350 degrees F (175 degrees C).
          Crumble the sausage into a skillet over medium-high heat. Cook until evenly browned. Add onion, and cook for a few minutes. Drain excess grease, and stir in the Alfredo sauce. Spoon this mixture over the pre-baked pizza crust. Sprinkle cheese over the top.
          Bake for 10 to 12 minutes in the preheated oven, until the cheese is melted. Allow to cool slightly before cutting to allow the toppings to set.`,
          dish_id: 1
        },
        {
          name: 'Casesar', 
          instructions: `Cover 4 plates with lettuce.
          Top with all remaining ingredients except dressing.
          Drizzle with dressing just before serving.`,
          dish_id: 3
        },
        {
          name: 'Chef Bevski\'s Greek Salad', 
          instructions: `Whisk olive oil, vinegar, dill, salt, and black pepper together in a bowl.
          Mix cucumber, broccoli, cauliflower, plum tomatoes, red cabbage, red onion, red bell pepper, green bell pepper, olives, and feta cheese together in a large bowl. Drizzle dressing over vegetable mixture; toss to coat. Refrigerate at least 1 hour to allow flavors to marinate.`,
          dish_id: 3
        },
        {
          name: 'Fish Tacos', 
          instructions: `To make beer batter: In a large bowl, combine flour, cornstarch, baking powder, and salt. Blend egg and beer, then quickly stir into the flour mixture (don't worry about a few lumps).
          To make white sauce: In a medium bowl, mix together yogurt and mayonnaise. Gradually stir in fresh lime juice until consistency is slightly runny. Season with jalapeno, capers, oregano, cumin, dill, and cayenne.
          Heat oil in deep-fryer to 375 degrees F (190 degrees C).
          Dust fish pieces lightly with flour. Dip into beer batter, and fry until crisp and golden brown. Drain on paper towels. Lightly fry tortillas; not too crisp. To serve, place fried fish in a tortilla, and top with shredded cabbage, and white sauce.`,
          dish_id: 2
        },
      ]);
    });
};
