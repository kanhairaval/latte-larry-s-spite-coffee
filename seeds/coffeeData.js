const { coffee } = require('../models');

const coffeeData = [
    {
        coffeeName: "Brewed Coffee",
        description: "Lightly roasted coffee that's soft, mellow and flavourful"
    },
    {
        coffeeName: "Americano",
        description: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance."
    },
];

const seedCoffee = () => coffee.bulkCreate(coffeeData);

module.exports = seedCoffee;