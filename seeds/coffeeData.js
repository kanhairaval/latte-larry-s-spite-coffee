const { coffee } = require('../models');

const coffeeData = [
    {
        coffeeName: "Brewed Coffee",
        description: "Lightly roasted coffee that's soft, mellow and flavourful",
        fileName: "11-brewed-coffee",
    },
    {
        coffeeName: "Cafe Americano",
        description: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
        fileName: "12-americano",
    },
];

const seedCoffee = () => coffee.bulkCreate(coffeeData);

module.exports = seedCoffee;