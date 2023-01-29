const { coffee } = require('../models/');

const coffeeData = [
    {
        coffeeName: "Brewed Coffee",
        description: "Lightly roasted coffee that's soft, mellow and flavourful",
        fileName: "11-brewed-coffee.png",
    },
    {
        coffeeName: "Caffè Americano",
        description: "Espresso shots topped with hot water create a light layer of cream.",
        fileName: "12-americano.png",
    },
    {
        coffeeName: "Cappuccino",
        description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.",
        fileName: "13-cappuccino.png",
    },
    {
        coffeeName: "Espresso",
        description: "Our smooth signature Espresso Roast with rich flavour and caramelly sweetness is at the very heart of everything we do.",
        fileName: "14-espresso.png",
    },
    {
        coffeeName: "Flat White",
        description: "Smoothristretto shots of espresso get the perfect amount of steamed whole milk.",
        fileName: "15-flat-white.png",
    },
    {
        coffeeName: "Caffè Latte",
        description: "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
        fileName: "16-latte.png",
    },
    {
        coffeeName: "Iced Caffè Americano",
        description: "Espresso shots topped with cold water produce a light layer of cream, then served over ice.",
        fileName: "17-iced-americano.png",
    },
    {
        coffeeName: "Iced Coffee",
        description: "Freshly brewed Starbucks® Iced Coffee Blend served chilled and sweetened over ice. A refreshingly lift to any day.",
        fileName: "18-iced-coffee.png",
    },
    {
        coffeeName: "Iced Caffè Latte",
        description: "Our dark, rich espresso combined with milk and served over ice. A perfect milk-forward cooldown.",
        fileName: "19-iced-latte.png",
    },
];

const seedCoffee = () => coffee.bulkCreate(coffeeData);

module.exports = seedCoffee;