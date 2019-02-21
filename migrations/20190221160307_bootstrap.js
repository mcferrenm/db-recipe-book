exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.timestamps(true, true);
    })
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl
        .string("instructions");

      tbl
        .integer("dish_id")
        .unsigned()
        .references("id")
        .inTable("dishes")
        .onDelete("restrict")
        .onUpdate("cascade")

      tbl.timestamps(true, true);
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.timestamps(true, true);
    })
    .createTable("recipes-ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("restrict")
        .onUpdate("cascade")
      
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("restrict")
        .onUpdate("cascade")
      
        tbl
          .float("quantity")
          .unsigned()

      tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {};
