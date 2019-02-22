
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'yeast'},
        {name: 'water'},
        {name: 'flour'},
        {name: 'sugar'},
        {name: 'oregano'},
        {name: 'salt'},
        {name: 'egg'},
        {name: 'extra virgin olive oil'},
        {name: 'tomatoes'},
        {name: 'onion'},
        {name: 'mozzarella cheese'},
        {name: 'bell pepper'},
        {name: 'mushrooms'},
        {name: 'butter'},
        {name: 'cornmeal'},
        {name: 'provelone cheese'},
        {name: 'sausage'},
        {name: 'sun-dried tomato'},
        {name: 'basil'},
        {name: 'chicken'},
        {name: 'feta cheese'},
        {name: 'romaine lettuce'},
        {name: 'parmesan cheese'},
        {name: 'anchovies'},
        {name: 'lemons'},
        {name: 'red wine vinegar'},
        {name: 'fresh dill'},
        {name: 'broccoli'},
        {name: 'cauliflower'},
        {name: 'red cabbage'},
        {name: 'olives'},
        {name: 'cornstarch'},
        {name: 'beer'},
        {name: 'yogurt'},
        {name: 'mayo'},
        {name: 'lime'},
        {name: 'jalapeno'},
        {name: 'cod fillets'},
        {name: 'garlic'},
        {name: 'tortillas'},
      ]);
    });
};
