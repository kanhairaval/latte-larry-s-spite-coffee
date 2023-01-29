const { Coffee } = require('../models/');

const coffeeData = [
    {
        coffeeName: "Brewed Coffee",
        description: "Lightly roasted coffee that's soft, mellow and flavourful",
        fileName: "11-brewed-coffee.png",
    },
    {
        coffeeName: "Cafe Americano",
        description: "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
        fileName: "12-americano.png",
    },
];

const seedCoffee = () => Coffee.bulkCreate(coffeeData);

module.exports = seedCoffee;